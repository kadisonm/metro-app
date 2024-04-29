import { app, BrowserWindow } from "electron";

let mainWindow: BrowserWindow | null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    minWidth: 800,
    minHeight: 600,
    title: "Adelaide Metro",
    frame: true,
    autoHideMenuBar: true,
    resizable: true,
    darkTheme: true,
  });

  mainWindow.loadFile('src/index.html');

  mainWindow.on("closed", () => {
    mainWindow = null;
  });
}

console.log("testeeeeee")

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (mainWindow === null) {
    createWindow();
  }
});