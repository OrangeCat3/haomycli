#!/usr/bin/env node

const program = require('commander')

//查看版本号
program.version(require('./package.json').version,'-v,--version')

//增加自己的option
//也是--help的提示
program.option('-w -why',"my create vue/react/koa project cli")

program.parse(process.argv)
