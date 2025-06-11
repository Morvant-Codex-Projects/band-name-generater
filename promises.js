console.log("I promise to try my best");

let p = new Promise((resolve,reject) =>{
    let m = 25 * 2
    if (m == 50) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})


p.then((message) => {
    console.log('This is the ' + message)
}).catch((message) => {
    console.log('This is the catch the ' + message)
});


let b = new Promise((resolve,reject) =>{
    let m = 56 - 24
    if (m == 50) {
        resolve('Success')
    } else {
        reject('Failed')
    }
})


b.then((message) => {
    console.log('This is the ' + message)
}).catch((message) => {
    console.log('This is the catch that ' + message)
});


