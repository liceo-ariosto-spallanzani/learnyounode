const fs = require('fs')
console.log(fs.readFileSync(process.argv[2],{encoding:'utf8'}).split("\n").length - 1)