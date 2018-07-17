const {
    CMD,
    getFileName,
    copyFiles,
    getTemplate
} = require('../utils/index')

async function addTemplate () {
    const fileName = await getFileName('请输入文件名称？')
    const templateName = await getTemplate('请输入模板的名称？')
    let npmGlobalPath = await CMD('npm', ['config', 'get', 'prefix'])
    npmGlobalPath = npmGlobalPath.replace(/[\r\n]/g,"")
    //复制文件到npm全局包目录下
    copyFiles(`./${fileName}`, `${npmGlobalPath}/node_modules/shark-test/${templateName}`)
}

module.exports = addTemplate
