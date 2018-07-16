const readline = require('readline')
const fs = require('fs')
var path = require('path')
const { spawn } = require('child_process')

const copyFiles = require('./file.js')

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


async function getTemplate(question) {
    let fileName
    while( true ) {
        const res = await prompt(question)
        if( !res ) {
            continue
        }
        if( res ) {
            fileName = res
            break
        }
    }
    return fileName
}

module.exports = {
    prompt,
    getFileName,
    getTemplate
}