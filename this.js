"use strict"

// "this" in global context
console.log(this)

// "this" inside function 
// If the strict mode is on then, "this" inside a function will give undefined
// if strict mode is off then, "this" inside a function will give us the windows in dom and viceversa according to where it is used
function hello () {
    console.log(this)
}
hello()

// "this" inside an object will give us access to all the keys present inside the object
const student = {
    name: "Raj_Mane",
    College: "St. Francis Institute Of Technology",
    isActive: true,
    Id: function printName() {
        console.log(this);
    }
}
console.log(student.Id());

// The value of "this" inside a arrow function will be its enclosing lexical context
//here "this" will be empty object
const printHello = () => {
    console.log(this);
}
printHello()


//here "this" will give us an object
//nested function
const obj = {
    a: 10,
    x: function (){
        const y = () => {
            console.log(this.a)
        }
    }
}

console.log(obj.x());

//"this" inside dom ==> reference to html element
