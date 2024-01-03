// console.log("Hello Daaali")

// const Sum=(a,b)=> a+b

// console.log(Sum(2,5))

// function Sum(a,b){
//     return a +b
// }

// console.log(Sum(1,2))

// console.log(process.argv)
// console.log(Sum(Number(process.argv[2]),Number(process.argv[3])))
// console.log(Sum(+process.argv[2],+process.argv[3]))

const Obj = require('./Modulelocal')
// const Fourat = require('./Modulelocal')

console.log(Obj.Sous(+process.argv[2],+process.argv[3]))

console.log(Obj.Multi(+process.argv[2],+process.argv[3]))