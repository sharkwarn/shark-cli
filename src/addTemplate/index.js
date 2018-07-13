const {
    CMD,
    getFileName
} = require('../utils/index')

async function addTemplate () {
    const fileName = await getFileName('请输入文件名称？')
    const npmGlobalPath = await CMD('npm', ['config', 'get', 'prefix'])
    console.log(npmGlobalPath)
}

module.exports = addTemplate