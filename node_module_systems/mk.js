const fs = require('fs');


//fs.mkdirSync('mydirectory')

let folderpath = "E:\\Node.js-Ultimate Course\\mydirectory"


let folderContent = fs.readdirSync(folderpath);

console.log("folder content", folderContent)


let doestExist = fs.existsSync('demo.js');

console.log(doestExist)

fs.rmdirSync('mydirectory')