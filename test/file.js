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

// createDir('./xiaowu')

// copyFile('./spawn.js', './xiaowu/a.js')

// fs.copyFile('./xiaowu.js', './xiaowu2.js', (err) => {
//     console.log(err)
// })
function copyFiles (path, origin) {
    const files = fs.readdirSync(path)
    for( let i=0; i<files.length; i++ ) {
        const childPath = `${path}/${files[i]}`
        const file = fs.statSync(childPath)
        if( file.isFile() ) {
            let targetPath = origin + '/' + childPath
            const arr = targetPath.split('/')
            let single = ''
            arr.forEach(item => {
                if( item == '.' ){
                }else {
                    const currentPath = origin + single + '/' + item
                    single = single + '/' + item
                    if( !fs.existsSync(currentPath) ) {
                        console.log(currentPath)
                        fs.mkdirSync(currentPath)
                    }
                }
            })
            fs.copyFileSync(childPath, targetPath)
        }else {
            copyFiles(childPath, origin)
        }

    }
}

copyFiles('./cope', './xiaowu2')

