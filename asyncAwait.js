// Async/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promise

//               Allows you to write asynchronous code in a 
//               synchronous manner. Async doesn't have resolve or 
//               reject parameters.Everything after Await is placed 
//               in an event queue


async function fetchAPI(){
    await fetch("https://jsonplaceholder.typicode.com/users/1").then(function(response){
        return response.json()
    })
    .then(function(response){
        console.log(response)
    })
}

  fetchAPI()           