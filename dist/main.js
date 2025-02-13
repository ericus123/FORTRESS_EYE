'use strict';
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var utils = require('@electron-toolkit/utils');
var electron = require('electron');
var getPortPlease = require('get-port-please');
var startServer = require('next/dist/server/lib/start-server');
var path = require('path');
var io = require('socket.io-client');
function _interopDefault(e) {
    return e && e.__esModule ? e : {
        default: e
    };
}
var io__default = /*#__PURE__*/ _interopDefault(io);
// electron/main.ts
var createWindow = function() {
    var mainWindow = new electron.BrowserWindow({
        width: 1200,
        height: 800,
        icon: path.join(__dirname, "../public/images/icons/cctv.svg"),
        webPreferences: {
            preload: path.join(__dirname, "preload.js"),
            nodeIntegration: true,
            contextIsolation: true
        }
    });
    mainWindow.on("ready-to-show", function() {
        return mainWindow.show();
    });
    var loadURL = /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function() {
            var port, error;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        if (!utils.is.dev) return [
                            3,
                            1
                        ];
                        mainWindow.loadURL("http://localhost:3000");
                        return [
                            3,
                            4
                        ];
                    case 1:
                        _state.trys.push([
                            1,
                            3,
                            ,
                            4
                        ]);
                        return [
                            4,
                            startNextJSServer()
                        ];
                    case 2:
                        port = _state.sent();
                        console.log("Next.js server started on port:", port);
                        mainWindow.loadURL("http://localhost:".concat(port));
                        return [
                            3,
                            4
                        ];
                    case 3:
                        error = _state.sent();
                        console.error("Error starting Next.js server:", error);
                        return [
                            3,
                            4
                        ];
                    case 4:
                        return [
                            2
                        ];
                }
            });
        });
        return function loadURL() {
            return _ref.apply(this, arguments);
        };
    }();
    loadURL();
    return mainWindow;
};
var startNextJSServer = /*#__PURE__*/ function() {
    var _ref = _async_to_generator(function() {
        var nextJSPort, webDir, error;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    _state.trys.push([
                        0,
                        3,
                        ,
                        4
                    ]);
                    return [
                        4,
                        getPortPlease.getPort({
                            portRange: [
                                30011,
                                5e4
                            ]
                        })
                    ];
                case 1:
                    nextJSPort = _state.sent();
                    webDir = path.join(electron.app.getAppPath(), "app");
                    return [
                        4,
                        startServer.startServer({
                            dir: webDir,
                            isDev: false,
                            hostname: "localhost",
                            port: nextJSPort,
                            customServer: true,
                            allowRetry: false,
                            keepAliveTimeout: 5e3,
                            minimalMode: true
                        })
                    ];
                case 2:
                    _state.sent();
                    return [
                        2,
                        nextJSPort
                    ];
                case 3:
                    error = _state.sent();
                    console.error("Error starting Next.js server:", error);
                    throw error;
                case 4:
                    return [
                        2
                    ];
            }
        });
    });
    return function startNextJSServer() {
        return _ref.apply(this, arguments);
    };
}();
electron.app.whenReady().then(function() {
    createWindow();
    var socket = io__default.default("http://127.0.0.1:7777");
    socket.emit("startStreams", [
        "rtsp://camera1/stream",
        "rtsp://camera2/stream",
        "rtsp://camera3/stream",
        "rtsp://camera4/stream",
        "rtsp://camera5/stream"
    ]);
    socket.on("sdpOffer", /*#__PURE__*/ function() {
        var _ref = _async_to_generator(function(data) {
            var streamId, sdpOffer, peerConnection, sdpAnswer;
            return _ts_generator(this, function(_state) {
                switch(_state.label){
                    case 0:
                        streamId = data.streamId, sdpOffer = data.sdpOffer;
                        peerConnection = new RTCPeerConnection();
                        return [
                            4,
                            peerConnection.setRemoteDescription(new RTCSessionDescription(sdpOffer))
                        ];
                    case 1:
                        _state.sent();
                        return [
                            4,
                            peerConnection.createAnswer()
                        ];
                    case 2:
                        sdpAnswer = _state.sent();
                        return [
                            4,
                            peerConnection.setLocalDescription(sdpAnswer)
                        ];
                    case 3:
                        _state.sent();
                        socket.emit("sdpAnswer", {
                            streamId: streamId,
                            sdpAnswer: sdpAnswer.sdp
                        });
                        peerConnection.ontrack = function(event) {
                            var videoElement = document.getElementById("video-".concat(streamId));
                            videoElement.srcObject = event.streams[0];
                        };
                        return [
                            2
                        ];
                }
            });
        });
        return function(data) {
            return _ref.apply(this, arguments);
        };
    }());
    electron.ipcMain.on("ping", function() {
        return console.log("pong");
    });
    electron.app.on("activate", function() {
        if (electron.BrowserWindow.getAllWindows().length === 0) createWindow();
    });
});
electron.app.on("window-all-closed", function() {
    if (process.platform !== "darwin") electron.app.quit();
});
