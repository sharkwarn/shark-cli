const readline = require('readline')
const fs = require('fs')
var path = require('path')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function test() {
    console.log('utils test')
}


function prompt(question) {
    return new Promise((resolve, reject) => {
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
            fileName = res2
            return
        }
    }
}

module.exports = {
    test,
    prompt,
    getFileName
}