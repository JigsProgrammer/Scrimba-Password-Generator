const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let oneChoice = document.getElementById("one-choice")
let twoChoice = document.getElementById("two-choice")
let passwordLength = 12
let firstChoice = ""
let secondChoice = ""

function generateRandomChars() {
    let randomChar = Math.floor( Math.random() * characters.length)
    return characters[randomChar]
}

function generatePW() {
    for (let i = 0; i < passwordLength; i++) {
        firstChoice += generateRandomChars()
        secondChoice += generateRandomChars()
        oneChoice.textContent = firstChoice
        twoChoice.textContent = secondChoice
    }
    return oneChoice && twoChoice
}

function delClear() {
    firstChoice = ""
    secondChoice = ""
    oneChoice.textContent = "Your first choice"
    twoChoice.textContent = "Your second choice"
}