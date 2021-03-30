let somma=0;
for (let i=2; i<process.argv.length; i++){
    somma+=Number(process.argv[i])
}
console.log(somma)