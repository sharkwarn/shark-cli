const { spawn } = require('child_process');
console.log(111)

const child = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['config', 'get', 'prefix']);

child.stdout.on('data', (data) => {
  console.log(`输出：${data}`);
});

child.stderr.on('data', (data) => {
  console.log(`错误：${data}`);
});

child.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});