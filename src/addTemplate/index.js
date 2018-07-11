const prompt = require('../utils/index').prompt

async function addTemplate () {
    const fileName = await prompt('请输入文件名称？')
    console.log(fileName)
}

module.exports = addTemplate