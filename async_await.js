// what is async ?
// It is a keyword used before a function to create a async function and it always returns us a promise

// we are getting a promise
async function data () {
    return "Namaste"
}

const p1 = new Promise((resolve, reject ) => {
    setTimeout( () => {
        resolve("Promised Resolved")
    }, 10000)
})

const p2 = new Promise((resolve, reject ) => {
    setTimeout( () => {
        resolve("Promised Resolved")
    }, 5000)
})

// handling promise using async await
async function handlePromise() {
    // js engine waits here for promise to be resolved 
    const value = await p1;
    console.log("Hello");
    console.log(value);

    const value2 = await p2;
    console.log(value2);
}

function getData () {
    p.then((resp) => {console.log(resp)})
    console.log("Namaste")
}