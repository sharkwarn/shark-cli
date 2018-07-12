const prompt = require('../utils/index').prompt
const getFileName = require('../utils/index').getFileName

async function addTemplate () {
    const fileName = await getFileName('请输入文件名称？')
    console.log(fileName)
}

module.exports = addTemplate