// // const amount = 43

// // if (amount < 50) {
// //     console.log("small number")
// // } else {
// //     console.log("large number")
// // }


// // environment variables 

// // console.log(__dirname)
// // console.log("*" * 20)
// // console.log(__filename)
// // console.log("*" * 20)
// // console.log(process)
// // console.log("*" * 20)
// // console.log(require)
// // console.log("*" * 20)
// // console.log(module)


// console.log("before")

// async function timeout() {
//     // return Promise(setTimeout(() => {
//     //     console.log("hello there ")
//     // }, 2000))
//     return new Promise((resolve, reject) => {
//         try {
//             setTimeout(() => {
//                 console.log("time out ")
//             }, 2000)
//             resolve("success")
//         }
//         catch (e) {
//             reject("Exception", e)
//         }
//     })

// }

// async function callme() {
//     console.log('inside second function ')

// }


// async function first() {
//     try {
//         let res = await timeout()
//         console.log(res)
//     } catch (e) {
//         console.log(e)
//     }
// }


// async function second() {
//     try {
//         let res = await callme()
//         console.log(res)
//     } catch (e) {
//         console.log(e)
//     }
// }


// first()
// second()


// console.log("after")



console.log("first")

async function printname() {

    setTimeout(() => {
        console.log("Hello there")
    }, 2000)
}

async function waitforme() {
    await printname()

}

printname()