let n = 0;
for (let i= 2; i < process.argv.length ; i++) {
  n += Number(process.argv[i]);
}
console.log(n);