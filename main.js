const { app } = require("electron");
const { BrowserWindow } = require("electron");

function createWindow() {
    // 创建浏览器窗口
    let win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    });

    // win.webContents.openDevTools();// 自动打开调试窗口

    // 加载index.html文件
    win.loadURL("http://localhost:3000");
    // win.loadFile('build/index.html');
}

app.on("ready", createWindow);

// 在主进程中.
const { ipcMain } = require("electron");
ipcMain.on("test", (event, arg) => {
    event.reply("test-son","shit son");
});
