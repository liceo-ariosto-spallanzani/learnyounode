const fs = require("fs")

const a = fs.readFileSync(process.argv[2])
const b = a.toString().split('\n').length - 1
console.log(b)