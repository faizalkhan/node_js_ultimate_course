const fs = require('fs');


//reading file


let contentRead = fs.readFileSync("f1.txt");

console.log("" + contentRead)

// write or create a new file


let contentWrite = fs.writeFileSync("f4.txt", 'hello world')

console.log(contentWrite)


// append

let contentAppend = fs.appendFileSync("f2.txt", 'hello world')

console.log(contentAppend)

// delete

let contentDelete = fs.unlinkSync("f4.txt")
