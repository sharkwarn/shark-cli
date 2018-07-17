#!/usr/bin/env node
'use strict'

var program = require('commander');
program
  .version(require('../package').version );

// 定义使用方法
program
  .usage('<command>')

program
  .command('add')
  .description('add a template')
  .alias('a')
  .action(function(){
      console.log('add a template!!!')
      require('../src/index').add()
  })
program
  .command('clone')
  .description('clone a template')
  .alias('c')
  .action(function(){
      console.log('clone a template!!!')
      require('../src/index').clone()
  })
program.parse(process.argv)

if(!program.args.length){
  program.help()
}
