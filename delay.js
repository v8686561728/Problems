setTimeout(()=>console.log(new Date().getTime()," d1"),1000)
setTimeout(()=>console.log(new Date().getTime()," d3"),3000)
new Promise(res =>res(console.log(new Date().getTime()," promise")))
console.log(new Date().getTime()," normal")
