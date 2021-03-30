const fs = require('fs') ;
fs.readFile(process.argv[2], 'utf-8', (error, data) => {
    if(error) {
        return console.log(error);
    }const linee = data.split('\n').length - 1;
    console.log(linee);
});
