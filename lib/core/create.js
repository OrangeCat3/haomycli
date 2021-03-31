const program = require("commander")
const {
	createProjectAction,
	addCpnAction
} = require("./action")

const createCommands = ()=>{
	program
		.command('create <project> [others...]')
		.description('clone repository into floder')
		.action(createProjectAction)

	program
		.command('addcpn <name>')
		.description('add vue component')
		.action((name)=>{
			addCpnAction(name,program.dest||'src/components')
		})
}

module.exports = createCommands
