#!/usr/bin/env node

const program = require('commander')
const helpOptions = require('./lib/core/help')
const createCommands = require('./lib/core/create')

//查看版本号
program.version(require('./package.json').version,'-v,--version')

//帮助和可选信息
helpOptions()

//其他指令
createCommands()

program.parse(process.argv)

