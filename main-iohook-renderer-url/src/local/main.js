const {app, BrowserWindow, ipcMain} = require('electron')
const log = require('electron-log')
const ioHook = require('iohook');
const url = require('url')
const path = require('path')

let mainWindow

function createWindow () {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  mainWindow.loadURL('http://127.0.0.1:8080/')
  mainWindow.webContents.openDevTools()

  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  app.quit()
})

app.on('activate', function () {
  if (mainWindow === null) createWindow()
})

ipcMain.on('loggingIoHook', (event, arg) => {
  ioHook.on('mousemove', event => {
    log.log(event); // { type: 'mousemove', x: 700, y: 400 }
  });
  ioHook.start();
})
