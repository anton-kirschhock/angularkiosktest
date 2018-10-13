const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
  win = new BrowserWindow({
    minWidth: 600,
    minHeight: 400,
    backgroundColor: '#ffffff',
    icon: `file://${__dirname}/dist/assets/images/icon.png`
  });

  win.loadURL(`file://${__dirname}/dist/index.html`);

  win.on('closed', function() {
    win = null;
  });

  // Create window on electron intialization
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', function() {
    // On macOS specific close process
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', function() {
    // macOS specific close process
    if (win === null) {
      createWindow();
    }
  });
}
