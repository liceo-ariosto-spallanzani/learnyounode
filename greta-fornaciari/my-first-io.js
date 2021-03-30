const fs = require('fs')  
const str = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
console.log(str)