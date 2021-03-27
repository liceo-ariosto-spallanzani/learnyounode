const fs = require("fs")
const util = require("util")

const readFile = util.promisify(fs.readFile)

function read() {
    return readFile(process.argv[2], "utf-8")
}

read().then(data => {
    const result = data.toString().split("\n").length-1
    console.log(result)
})

