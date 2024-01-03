// const fs = require('fs')

// console.log("Start")

// fs.readFile('./khalil.txt','utf8',(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data)
//     }
// })
// console.log(fs.readFileSync('./khalil.txt','utf8'))

// console.log('End')

const http = require('http')

http.createServer((req,res)=>{
    res.write('<h1>Daali Papillon</h1>')
    res.end()
}).listen(5000)