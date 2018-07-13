## 脚手架遇到的问题总结

+ readline
```
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question(question, (answer) => {
    resolve(answer)
    rl.close();
});
```
每次使用readLine获取命令行信息的时候都需要createInterface重新实例一个对象。遇到的情况：使用同一个实例 question没有返回结果。


+  通过spawn 跑npm 命令， node 和 git没有发现这种情况。

```
const { spawn } = require('child_process');

const child = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['-v']);

child.stdout.on('data', (data) => {
  console.log(`输出：${data}`);
});

child.stderr.on('data', (data) => {
  console.log(`错误：${data}`);
});

child.on('close', (code) => {
  console.log(`子进程退出码：${code}`);
});
```
window下不可以直接使用'npm'。

Which is checking the operating system if ti's windows it runs npm.cmd if it's linux just npm。

参考资料 https://stackoverflow.com/questions/43230346/error-spawn-npm-enoent

