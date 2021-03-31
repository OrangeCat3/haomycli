const program = require("commander")
const {
	createProjectAction
} = require("./action")

const createCommands = ()=>{
	program
		.command('create <project> [others...]')
		.description('clone repository into floder')
		.action(createProjectAction)

}

module.exports = createCommands
