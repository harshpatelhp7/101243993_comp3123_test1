//*******Question-3*******
const path = require('path');
const fs = require('fs');
const process = require('process');
let add = require('./add')
let rm = require('./remove')

if(fs.existsSync('./Logs') == false){
    add.mkdir('./Logs');
}

if(fs.existsSync('./Logs') == true){
    rm.removeDir('./Logs');
}

if(fs.existsSync('./Logs') == true){
    if(fs.existsSync('./Logs/log0') == false){
        for(let i = 0; i < 9; i++){
            add.addFile(`./Logs/log${i}.txt`,`Log file ${i}`)
        }
    }    
}

if(fs.existsSync('./Logs') == true){
    if(fs.existsSync('./Logs/log0') == false){
            rm.showFiles()
    }    
}

if(fs.existsSync('./Logs') == true){
    if(fs.existsSync('./Logs/log0') == false){
            rm.showFilesToRemove()
    }    
}