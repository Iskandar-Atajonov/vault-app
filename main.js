const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 900,
    minHeight: 600,
    title: 'Vault — Personal Finance',
    backgroundColor: '#0a0a0f',
    show: false,
    icon: path.join(__dirname, 'assets', process.platform === 'win32' ? 'icon.ico' : 'icon.png'),
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  mainWindow.loadFile('index.html');

  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => { mainWindow = null; });

  const template = [
    {
      label: 'Vault',
      submenu: [
        { label: 'About Vault', role: 'about' },
        { type: 'separator' },
        { label: 'Quit', accelerator: 'CmdOrCtrl+Q', click: () => app.quit() },
      ],
    },
    {
      label: 'View',
      submenu: [
        { label: 'Reload', accelerator: 'CmdOrCtrl+R', click: () => mainWindow.reload() },
        { label: 'Toggle DevTools', accelerator: 'F12', click: () => mainWindow.webContents.toggleDevTools() },
        { type: 'separator' },
        { role: 'zoomIn' }, { role: 'zoomOut' }, { role: 'resetZoom' },
        { type: 'separator' },
        { role: 'togglefullscreen' },
      ],
    },
    {
      label: 'Navigate',
      submenu: [
        { label: 'Overview',          accelerator: 'CmdOrCtrl+1', click: () => mainWindow.webContents.executeJavaScript("document.querySelectorAll('.nav-item')[0].click()") },
        { label: 'Add Transaction',   accelerator: 'CmdOrCtrl+2', click: () => mainWindow.webContents.executeJavaScript("document.querySelectorAll('.nav-item')[1].click()") },
        { label: 'Savings Goals',     accelerator: 'CmdOrCtrl+3', click: () => mainWindow.webContents.executeJavaScript("document.querySelectorAll('.nav-item')[2].click()") },
        { label: 'Budgets',           accelerator: 'CmdOrCtrl+4', click: () => mainWindow.webContents.executeJavaScript("document.querySelectorAll('.nav-item')[3].click()") },
        { label: 'History',           accelerator: 'CmdOrCtrl+5', click: () => mainWindow.webContents.executeJavaScript("document.querySelectorAll('.nav-item')[4].click()") },
        { type: 'separator' },
        { label: 'Notifications',     accelerator: 'CmdOrCtrl+N', click: () => mainWindow.webContents.executeJavaScript("openNotifPanel()") },
      ],
    },
  ];

  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

app.whenReady().then(() => {
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit();
});
