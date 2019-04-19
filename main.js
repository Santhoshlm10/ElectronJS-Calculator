console.log("Running.........");

const electron = require('electron');
const url = require('url');
const path = require('path');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

let win;

function createWindow(){
     win =  new BrowserWindow({frame:true});
     win.setMaximizable(false);
     win.setMenu(null);
     win.setResizable(false);
     win.loadURL(url.format({
      pathname : path.join(__dirname,'index.html'),
      protocol : 'file',
      slashes : true
     }));

    win.on('closed',() =>{
        win = null;
    });
}

app.on('ready',createWindow);