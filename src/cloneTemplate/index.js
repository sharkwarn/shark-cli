const fs = require('fs')
const {
    CMD,
    getFileName,
    copyFiles,
    getTemplate
} = require('../utils/index')

async function cloneTemplate () {
    //获取模板名称
    const templateName = await getTemplate('请输入一个模板的名称?')
    //获取全局安装路径
    let npmGlobalPath = await CMD('npm', ['config', 'get', 'prefix'])
    npmGlobalPath = npmGlobalPath.replace(/[\r\n]/g,"")
    // 检测模板是否存在
    const flag = fs.existsSync(`${npmGlobalPath}/node_modules/shark-test/${templateName}`)
    if( !flag ) {
        console.log('模板不存在！')
        return
    }
    
}

module.exports = cloneTemplate