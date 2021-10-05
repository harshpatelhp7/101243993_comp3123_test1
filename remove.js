const path = require('path');
const fs = require('fs');

function showFiles(){
    fs.readdir('./Logs', 
        (err, files) => {
        console.log("\nLogs directory files:");
        if (err)
        console.log(err);
        else {
        files.forEach(file => {
            console.log(file);
        })
        }
    })
}
function showFilesToRemove(){
    fs.readdir('./Logs', 
        (err, files) => {
        if (err)
        console.log(err);
        else {
        files.forEach(file => {
            console.log("delete files..." + file);
        })
        }
    })
}

function removeAllFiles(dirLoc){
  for(let i = 0; i < 10; i++){
     fs.unlink(path.join(dirLoc, `log${i}`), err => {
        if (err) throw err;
        })
        console.log(`delete files...log${i}.txt`)
    }
    console.log("Deleted: All Logs Files")
}

function removeDir(dirLoc){
    fs.rm(dirLoc, { recursive: true }, (err) => {
        if (err) {
            throw err;
        }
    })
    console.log("Deleted : Logs Directory")
}

module.exports = {removeAllFiles, removeDir, showFiles, showFilesToRemove}