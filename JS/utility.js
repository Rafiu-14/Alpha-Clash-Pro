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