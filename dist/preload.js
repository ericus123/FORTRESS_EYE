'use strict';
var electron = require('electron');
// electron/preload.ts
electron.contextBridge.exposeInMainWorld("electron", {
    ipcRenderer: {
        send: function(channel, data) {
            return electron.ipcRenderer.send(channel, data);
        },
        on: function(channel, listener) {
            return electron.ipcRenderer.on(channel, listener);
        }
    }
});
