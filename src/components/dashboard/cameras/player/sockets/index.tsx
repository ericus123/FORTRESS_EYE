import React, { FC, useEffect, useRef, useState } from "react";

import { CSSProperties } from "react";
import { isValidWsUrl, playerLog } from "../../../../../helpers";
import PlayerLoader from "../../../../common/loaders/PlayerLoader";

export type PlayerStyles = {
  show?: boolean;
  style?: CSSProperties;
  className?: string;
  customLoader?: React.ReactNode;
};

export type WsPlayerProps = {
  width?: number;
  height?: number;
  withWorker?: boolean;
  wsUrl: string;
  debug?: boolean;
  style?: CSSProperties;
  loaderProps?: PlayerStyles;
};

const PlayerWithWorker: FC<WsPlayerProps> = ({
  height = 600,
  width = 600,
  wsUrl,
  debug,
  loaderProps,
  style
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const workerRef = useRef<Worker | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");

    if (!workerRef.current) {
      // Create a web worker when the component mounts
      workerRef.current = new Worker(
        new URL("/public/workers/player.worker.ts", import.meta.url)
      );

      workerRef.current.onmessage = (e) => {
        const message = e.data;
        if (message.type === "open") {
          playerLog({
            message: "WebSocket connection opened.",
            type: "warning",
            enabled: debug,
            event: e
          });
        } else if (message.type === "close") {
          playerLog({
            message: "WebSocket connection closed.",
            type: "warning",
            enabled: debug,
            event: e
          });
        } else if (message.type === "error") {
          playerLog({
            message: "WebSocket error",
            type: "error",
            enabled: debug,
            event: e
          });
          if (!isLoading) {
            setIsLoading(true);
          }
        } else if (message.type === "image") {
          const image = new Image();
          image.onload = () => {
            if (ctx) {
              // Clear the canvas
              ctx.clearRect(
                0,
                0,
                width || canvas?.width || 0,
                height || canvas?.height || 0
              );
              // Draw the image on the canvas
              ctx.drawImage(
                image,
                0,
                0,
                width || image.width,
                height || image.height
              );
            }
          };
          image.src = message.blobURL;
          if (isLoading) {
            setIsLoading(false);
          }
        }
      };
    }

    // Send a message to the web worker to start the WebSocket connection

    if (isValidWsUrl(wsUrl)) {
      workerRef.current.postMessage({
        type: "start",
        wsUrl
      });
    } else {
      throw new Error("Invalid ws url");
    }

    return () => {
      playerLog({
        message: "Component unmounted. Closing WebSocket connection.",
        type: "warning",
        enabled: debug
      });
      if (workerRef.current) {
        workerRef.current.terminate();
        workerRef.current = null;
      }
    };
  }, []);

  return (
    <React.Fragment>
      <canvas
        ref={canvasRef}
        style={style}
        width={width || "100%"}
        height={height || "100%"}
      />
      {loaderProps?.show && isLoading ? (
        <PlayerLoader {...loaderProps} />
      ) : null}
    </React.Fragment>
  );
};

export default PlayerWithWorker;
