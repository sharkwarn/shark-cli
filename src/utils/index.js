const readline = require('readline')
const fs = require('fs')
var path = require('path')
const { spawn } = require('child_process')

const copyFiles = require('./file/index.js')
const {  prompt, getFileName, getTemplate } = require('./prompt/index.js')

async function CMD( tool, ...arg ) {
    return new Promise((reslove, reject)=>{
        let child
        if( tool.includes('npm') ){
            child = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ...arg);
        }else {
            child = spawn(tool, ...arg);
        }

        child.stdout.on('data', (data) => {
            if( Buffer.isBuffer(data) ) {
                reslove(data.toString())
            }else{
                reslove(data)
            }
            
        });

        child.stderr.on('data', (data) => {
            console.log(`出现错误: ${data}`)
            reject(data)
        });

        child.on('close', (code) => {
            
        });
    })
    
}

module.exports = {
    prompt,
    getFileName,
    CMD,
    copyFiles,
    getTemplate
}