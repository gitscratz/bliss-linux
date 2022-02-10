var _ = require('lodash')
var fs = require('fs')
var data = required('./data.json')


console.log("Here's a randeem fukeen numbah! " + _.random(1,100))

fs.readfile('./data.json', 'utf-8', (err,data) => {
 	console.log(data)
})

console.log("this is the end?")

