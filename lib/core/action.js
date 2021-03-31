const { promisify } = require("util")
const download = promisify(require('download-git-repo'))
const {
	vueRepo,
	koaRepo,
	ReactRepo
} = require('../config/repo-config')
const { commandSpawn } = require('../utils/terminal')
const isWin32 = process.platform === 'win32'
const npmCommander = isWin32?'npm.cmd':'npm'

const createProjectAction = async (project)=>{

	console.log("wait create...")
	await download(vueRepo,project,{clone:true});
	//运行npm install
	await commandSpawn(npmCommander,['install'],{cwd:`./${project}`})
	//运行npm run server
	await commandSpawn(npmCommander,['run','server'],{cwd:`./${project}`})

}

module.exports = {
	createProjectAction
}
