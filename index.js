#!/usr/bin/env node

const program = require('commander')

//查看版本号
program.version(require('./package.json').version,'-v,--version')

//增加自己的option
//也是--help的提示
program.option('-r -why',"a why cli")

program.parse(process.argv)
