var {ipcRenderer} = require('electron');
ipcRenderer.on("test-son", (event, arg) => {
    console.log(arg);
});
ipcRenderer.send("test", "father hi");