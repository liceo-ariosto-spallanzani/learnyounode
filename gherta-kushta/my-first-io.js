const fs = require('fs') ;
const stringa = fs.readFileSync(process.argv[2]).toString();
const linee = stringa.split('\n').length - 1;
console.log(linee);