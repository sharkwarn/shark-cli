const fs = require('fs')

// 复制指定目录下的内容到指定目录下。


function copyFiles (path, origin) {
    const files = fs.readdirSync(path)
    // 去掉将被copy的文件的文件夹名字
    let currentPath = path.split('/').slice(2).join('/')
    // 判断该文件夹在目标文件夹下是否存在不存在创建一个
    let globalPath = origin + '/' + currentPath
    if( !fs.existsSync(globalPath) ) {
        fs.mkdirSync(globalPath)
    }
    for( let i=0; i<files.length; i++ ) {
        const childPath = `${path}/${files[i]}`
        const file = fs.statSync(childPath)
        if( file.isFile() ) {
            fs.copyFileSync(childPath, globalPath + '/' + files[i])
        }else {
            copyFiles(childPath, origin)
        }
    }
}

module.exports = copyFiles