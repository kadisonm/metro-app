import { app, BrowserWindow } from 'electron'
import serve from 'electron-serve'
import path from 'path'

var dirName = app.getAppPath();

const appServe = app.isPackaged ? serve({
  directory: path.join(dirName, "/out")
}) : null;

const createWindow = () => {
  const win = new BrowserWindow({
    width: 511,
    height: 1080,
    resizable: false,
    title: "AdlMetro",
    webPreferences: {
      preload: path.join(dirName, "/src/preload.ts")
    }
  });

  if (appServe != null) {
    appServe(win).then(() => {
      win.loadURL("app://-");
    });
  } else {
    win.loadURL("http://localhost:3000");

    win.webContents.openDevTools();

    win.webContents.on("did-fail-load", (e: any, code: any, desc: any) => {
      win.webContents.reloadIgnoringCache();
    });
  }
}

app.on("ready", () => {
    createWindow();
});

app.on("window-all-closed", () => {
    if(process.platform !== "darwin"){
        app.quit();
    }
});