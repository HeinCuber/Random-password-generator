const letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

const symbols = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?"]

const passwordLengthEl = document.getElementById("password-length-el")
const includeSymbolsEl = document.getElementById("include-symbols-el")
const includeNumbersEl = document.getElementById("include-numbers-el")
const password1El = document.getElementById("password1-el")
const password2El = document.getElementById("password2-el")

let characters = []
let password1 = ""
let password2 = ""

function generatePasswords(){
    createCharacters()
    password1 = generatePassword()
    password2 = generatePassword()
    displayPassword()
}

function createCharacters(){
    characters = letters
    if (includeNumbersEl.checked){
        characters = characters.concat(numbers)
    }
    if (includeSymbolsEl.checked){
        characters = characters.concat(symbols)
    }
}

function generatePassword(){
    let password = ""
    for (let i = 0; i < passwordLengthEl.value; i++){
        password += characters[Math.floor(Math.random() * characters.length)]
    }
    return password
}

function displayPassword(){
    password1El.textContent = password1
    password2El.textContent = password2
}
