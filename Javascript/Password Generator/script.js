// This script is for the password generator

function getPasswordLength(){
    const length = document.getElementById("length").value;
    return Number(length);
}

function getPasswordProps(){

// Option 1, simple but repetitive
    // const lowercase = document.getElementById("lowercase")
    // const uppercase = document.getElementById("uppercase")
    // const nums = document.getElementById("numbers")
    // const spcharact = document.getElementById("spcharact")

// Option 2, more streamlined

    const ids = ["lowercase", "uppercase", "numbers", "spcharact"];
    const properties = {};

    for (const id of ids){
        const element = document.getElementById(id);
        properties[id] = element.checked;
    }

    return properties;
}

function getChars(lowercase = true){
    const start = lowercase ? 97 : 65;
    let chars = [];

    for (i = start; i < start + 26; i++){
        chars.push(String.fromCharCode(i));
    }

    return chars
}

function getNumbers(){
    const nums = []
    for (let i = 0; i < 10; i++){
        nums.push(i)
    }
    return nums;
}
const lowercaseChars = getChars(true);
const uppercaseChars = getChars(false);
const numberslist = getNumbers()
const special = ["!", "@", "#", "%", "^", "&", "(", ")", "*", "_", "-", "$"]

function generatePassword(){
    const length = getPasswordLength();
    const properties = getPasswordProps();
    
    const characters = []
    if (properties.lowercase) characters.push(...lowercaseChars)
    if (properties.uppercase) characters.push(...uppercaseChars)
    if (properties.numbers) characters.push(...numberslist)
    if (properties.spcharact) characters.push(...special)

    if (characters.length === 0){
        return alert("You have to select at least one item from the list")
    }


    let pwd = [];
    for (let i = 0; i < length; i++){
        const randomidx = Math.floor(Math.random() * characters.length)
        const char = characters[randomidx]
        pwd.push(char)
        
    }
    const pwdString = pwd.join("")

    document.getElementById("password").innerHTML = "<p>" + "Password :   " + pwdString + "</p>"
    // genPwd.innerHTML = pwdString

    // console.log(length, properties, lowercaseChars, uppercaseChars)
}