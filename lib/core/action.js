const path = require('path')
const { promisify } = require("util")
const download = promisify(require('download-git-repo'))
const {
	vueRepo,
	koaRepo,
	reactRepo
} = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const { compile,writeToFile } = require('../utils/utils')


const isWin32 = process.platform === 'win32'
const npmCommander = isWin32?'npm.cmd':'npm'


//创建项目
const createProjectAction = async (project)=>{

	console.log("wait create...")

	if("-f".indexOf(process.argv)||"--framework".indexOf(process.argv)){
		const opt = ['-f','--framework']
		let framework = 'vue'
		for(let i=0;i<process.argv.length;i++){
			if (opt[0]===process.argv[i]||opt[1]===process.argv[i]){
				framework = process.argv[i+1]
			}
		}
		// console.log(framework)
		switch (framework){
			case "vue":
				await download(vueRepo,project,{clone:true})
				//运行npm install
				await commandSpawn(npmCommander,['install'],{cwd:`./${project}`})
				//运行npm run server
				await commandSpawn(npmCommander,['run','serve'],{cwd:`./${project}`});break
			case "koa":
				await download(koaRepo,project,{clone:true})
				//运行npm install
				await commandSpawn(npmCommander,['install'],{cwd:`./${project}`});break
			case "react":
				//react暂时没搞模板
				await download(reactRepo,project,{clone:true});break
		}



	}




}

//添加组件的action
const addCpnAction = async (name,dest)=>{

	const result = await compile("vue-components.ejs",{name,lowername:name.toLowerCase()})

	const targetPath = path.resolve(dest,`${name}.vue`)
	writeToFile(targetPath,result)
}

module.exports = {
	createProjectAction,
	addCpnAction
}
