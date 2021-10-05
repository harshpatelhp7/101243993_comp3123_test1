let fs = require("fs");

function mkdir(dirLoc){
    fs.mkdir(dirLoc, (err) => {
        if(err){
            throw err;
        }
    })
}

function addFile(fileLoc, someContent){
    fs.appendFile(fileLoc, someContent, function (err) {
    if (err) throw err;
 })
}
 module.exports = {addFile, mkdir};