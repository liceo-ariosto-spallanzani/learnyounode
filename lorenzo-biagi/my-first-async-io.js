const fs=require("fs")
fs.readFile(process.argv[2],'utf-8',(err,file)=>err ? console.log(err) : console.log(file.split("\n").length-1))
