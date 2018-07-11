#!/usr/bin/env node
'use strict'

var program = require('commander');
program
  .version(require('../package').version );

// 定义使用方法
program
  .usage('<command>')

program
  .command('init')
  .description('init a node + es6 template')
  .alias('i')
  .action(function(){
      console.log('init')
      require('../src/index')()
  })
program.parse(process.argv)

if(!program.args.length){
  program.help()
}
