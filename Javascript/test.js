// console.log("hello world");
// console.log("This is my first js script");
// console.warn("This is a warning genrated by me");
// console.error("This is an error message")
// console.info("What is your name?, jk this is an info box")

// document.getElementById("name").innerHTML = "This is the changed version";
// document.getElementById("name").style = "color: blue";
// console.log(document.getElementById("name"));

// console.log(document.getElementById("name").innerHTML)

// const age = prompt("Enter your age: ")

// if (age > 12){
//     alert("you can browns the internet freely. ")
// }
// else{
//     alert("you are too young to browse the internet without parental consent")
// }



// the Spread operator

// const obj = {
//     name : "Matteo",
//     age : 26
// };

// const obj2 = { ... obj };
// obj2.name = "jon"

// console.log(obj)
// console.log(obj2)

// for (const [prop, value] of Object.entries(obj)){
//     console.log(prop, value)
// }

// for (const prop in obj2){
//     console.log(prop)
// }


const arr = [1, 2, 3, 4, 5, 6, 7]

function modNum (array, func) {
    let newArr = [];

    for (const num of array){
        newArr.push(func(num))
    }

    return newArr;
}

const newMod = modNum(arr , (x) => (x % 3))

console.log(newMod)