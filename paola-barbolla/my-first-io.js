const fs = require("fs")
const file = fs.readFileSync(process.argv[2])
const str = file.toString()
const array = str.split("\n")
const result = array.length-1
console.log(result)