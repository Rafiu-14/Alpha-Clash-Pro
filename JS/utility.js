function hideElementByID(elementID) {
    const element = document.getElementById(elementID)
    element.classList.add('hidden')
}

function showElementByID(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove('hidden')
}

function getARandomAlphabets(){
    const alphabetsString = 'abcdefghijklmnopqrstuvwxyz'
    const alphabets = alphabetsString.split('')
    const randomNumber = Math.random()*25
    const index = Math.round(randomNumber)
    const alphabet = alphabets[index]
    console.log(alphabet,index)
    return alphabet;
}

function setBackgroundColorByID(elementID){
    const element = document.getElementById(elementID)
    element.classList.add('bg-orange-400')
}

function removeBackgroundColorByID(elementID){
    const element = document.getElementById(elementID)
    element.classList.remove('bg-orange-400')
}

function getTextElementByID(elementID){
    const element = document.getElementById(elementID)
    const elementValueText = element.innerText
    const value = parseInt(elementValueText)
    return value
}

function getElementTextByID(elementID){
    const element = document.getElementById(elementID)
    const text = element.innerText
    return text
}

function setTextElementByID(elementID,value){
    const element = document.getElementById(elementID)
    element.innerText = value
}