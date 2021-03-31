const ejs = require('ejs')
const fs = require('fs')
const path = require('path')

const compile = (tem,data)=>{
	const templatePosition = `../templates/${template}`
	const templatePath = path.resolve(__dirname,tem)

	ejs.renderFile()
}

const writeToFile = (path,content)=>{


	return fs.promises.writeFile(path, content)
}


module.exports = {
	compile,writeToFile
}
