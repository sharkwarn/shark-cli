const readline = require('readline')
const fs = require('fs')
var path = require('path')
const { spawn } = require('child_process')

function prompt(question) {
    return new Promise((resolve, reject) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(question, (answer) => {
            resolve(answer)
            rl.close();
        });
    })
}

async function getFileName(question) {
    let fileName
    while( true ) {
        const res = await prompt(question)
        if( !res ) {
            continue
        }
        const res2 = fs.existsSync(res)
        if( res2 ) {
            fileName = res
            break
        }
    }
    return fileName
}

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
    CMD
}