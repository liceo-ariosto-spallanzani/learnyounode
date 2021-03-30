const fs = require('fs')
const contenuto = fs.readFileSync(process.argv[2])
const caratteri = contenuto.toString().split('\n').length - 1
console.log(caratteri)