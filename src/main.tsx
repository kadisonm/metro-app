import { app, BrowserWindow } from "electron";
import { render } from "preact";

import WindowComponent from "./ui/window";

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

  //render(<WindowComponent/>, document.body);

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
    mainWindow.webContents.executeJavaScript(`render(<WindowComponent/>, document.body)`);
  }
});