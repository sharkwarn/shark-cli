const readline = require('readline')

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
    let flag = false
    let fileName
    while( !flag ) {
        const res = await prompt(question)
    }
}

module.exports = {
    test,
    prompt
}