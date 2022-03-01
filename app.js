// // // // // const amount = 43

// // // // // if (amount < 50) {
// // // // //     console.log("small number")
// // // // // } else {
// // // // //     console.log("large number")
// // // // // }


// // // // best_pair = require('./4-names')
// // // // printme = require('./utils')

// // // // printme(best_pair.husband, best_pair.wife)


// // // const print = function printme() {
// // //     // module.exports = { a: 1, b: 2, 7 }
// // // }

// // // print()

// // // module.exports = { print, a: 2 }
// // // console.log("hj")


// // const http = require('http')

// // http.createServer((req, res) => {
// //     console.log("hello there, ")
// // })


// // function callme(callback) {
// //     if (Math.floor(Math.random() * 10) + 1 > 5) {
// //         callback()
// //     }
// // }

// // const check = function calling() {
// //     callme(() => {
// //         console.log("Success")
// //     })
// // }
// // check()


// // const names = function printme() {
// //     console.log("hello ther ")
// // }


// // names()


// const http = require('http')

// const server = http.createServer((req, res) => {

//     if (req.url == '/') {
//         res.write("Hello there, Welcome")
//     }
//     if (req.url == '/about') {
//         res.end("About page")
//     }
//     else { res.end(' can\'t find what you are looking for !!') }
// })

// server.listen(2002)

const _ = require('loadash')

console.log(_.substring())