import { is } from "@electron-toolkit/utils";
import { app, BrowserWindow, ipcMain } from "electron";
import { getPort } from "get-port-please";
import { startServer } from "next/dist/server/lib/start-server";
import { join } from "path";
import io from "socket.io-client";

// Create the Electron window
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    icon: join(__dirname, "../public/images/icons/cctv.svg"),
    webPreferences: {
      preload: join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true // To allow nodeIntegration in the renderer process
    }
  });

  // When the window is ready, show it
  mainWindow.on("ready-to-show", () => mainWindow.show());

  // Load URL depending on environment (development or production)
  const loadURL = async () => {
    if (is.dev) {
      mainWindow.loadURL("http://localhost:3000");
    } else {
      try {
        const port = await startNextJSServer();
        console.log("Next.js server started on port:", port);
        mainWindow.loadURL(`http://localhost:${port}`);
      } catch (error) {
        console.error("Error starting Next.js server:", error);
      }
    }
  };

  loadURL();
  return mainWindow;
};

// Start the Next.js server
const startNextJSServer = async () => {
  try {
    const nextJSPort = await getPort({ portRange: [30011, 50000] });
    const webDir = join(app.getAppPath(), "app");

    await startServer({
      dir: webDir,
      isDev: false,
      hostname: "localhost",
      port: nextJSPort,
      customServer: true,
      allowRetry: false,
      keepAliveTimeout: 5000,
      minimalMode: true
    });

    return nextJSPort;
  } catch (error) {
    console.error("Error starting Next.js server:", error);
    throw error;
  }
};

// Main Electron app
app.whenReady().then(() => {
  createWindow();

  // Initialize WebSocket connection to the signaling server (Kurento)
  const socket = io("http://127.0.0.1:7777"); // Connect to the WebSocket server (NestJS/Kurento server)

  // Start streaming RTSP streams
  socket.emit("startStreams", [
    "rtsp://camera1/stream",
    "rtsp://camera2/stream",
    "rtsp://camera3/stream",
    "rtsp://camera4/stream",
    "rtsp://camera5/stream"
  ]);

  // Handle SDP offer from the WebSocket server
  socket.on(
    "sdpOffer",
    async (data: { streamId: string; sdpOffer: RTCSessionDescriptionInit }) => {
      const { streamId, sdpOffer } = data;
      const peerConnection = new RTCPeerConnection();

      // Set the remote description (SDP offer) from the server
      await peerConnection.setRemoteDescription(
        new RTCSessionDescription(sdpOffer)
      );

      // Create an SDP answer and send it back to the server
      const sdpAnswer = await peerConnection.createAnswer();
      await peerConnection.setLocalDescription(sdpAnswer);
      socket.emit("sdpAnswer", { streamId, sdpAnswer: sdpAnswer.sdp });

      // When a stream is available, set the video stream to the video element
      peerConnection.ontrack = (event) => {
        const videoElement = document.getElementById(
          `video-${streamId}`
        ) as HTMLVideoElement;
        videoElement.srcObject = event.streams[0];
      };
    }
  );

  ipcMain.on("ping", () => console.log("pong"));
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Quit the app when all windows are closed (except on macOS)
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
