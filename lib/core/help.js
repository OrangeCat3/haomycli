const program = require('commander')

const helpOptions = ()=>{
	//增加自己的option
	//也是--help的提示
	program.option('-w, --why',"my create vue/react/koa project cli")
	program.option('-d, --dest <dest>',"a destination folder,例如: -d /src/components")
	program.option('-f, --framework <framework>',"chioce your framework like vue")

	program.on('--help',()=>{

	})

}

module.exports = helpOptions
