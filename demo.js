var _ = require('lodash')
var fs = require('fs')
var data = require('./data.json')


console.log("Here's a randeem fukeen numbah! " + _.random(1,100))

fs.readFile('./data.json', 'utf-8', (err,data) => {
	var data = JSON.parse(data)
 	console.log("here is the secret..sshhh... "+data.token)
})

console.log("this is the end?, "+data.name+" ?")

fs.readdir('/home/scratz', (err,data) => {
	console.log("directory listing "+data)
})
