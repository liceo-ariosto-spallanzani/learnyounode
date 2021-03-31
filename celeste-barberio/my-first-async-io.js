const fs = require('fs');
const file = process.argv[2];

file = fs.readFile(file, function(err, data) {
  console.log(data.toString().split('\n').length - 1);
});