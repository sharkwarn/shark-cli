const fs = require('fs')

function copyFile (origin, target) {
    const readerStream = fs.createReadStream(origin)
    const writerStream = fs.createWriteStream(target)
    readerStream.pipe(writerStream)
}

function createDir(path) {
    const exit = fs.existsSync(path)
    if( exit ) {
        console.log(`${path}文件夹已经存在！`)
        return true
    }
    fs.mkdirSync(path)
    return  true
}

createDir('./xiaowu')

copyFile('./spawn.js', './xiaowu/a.js')