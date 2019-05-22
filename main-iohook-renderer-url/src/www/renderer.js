const { ipcRenderer } = window.require('electron')
ipcRenderer.send('loggingIoHook')
