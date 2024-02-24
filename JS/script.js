function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    const currentAlphabetsElement = document.getElementById('current-alphabets')
    const currentAlphabets = currentAlphabetsElement.innerText
    const expectedAlphabets = currentAlphabets.toLowerCase()
    if(playerPressed === expectedAlphabets){
        console.log("Yeee! you pressed-",playerPressed,".You got a point")
        
        const currentScore = getTextElementByID('current-score')
        const newScore = currentScore + 1
        setTextElementByID('current-score',newScore)
        // const currentScoreElement = document.getElementById('current-score')
        // const currentScoreText = currentScoreElement.innerText
        // const currentScore = parseInt(currentScoreText)
        // const newScore = currentScore + 1
        // currentScoreElement.innerText = newScore
        removeBackgroundColorByID(expectedAlphabets)
        gameLoop()
    }
    else{
        console.log("Ooo no! you pressed-",playerPressed,".Correct key was",expectedAlphabets,".You lost a life!!")
        const currentLifeElement = document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText
        const currentLife = parseInt(currentLifeText)
        const newLife = currentLife - 1
        currentLifeElement.innerText = newLife
        if(newLife === 0){
            gameover()
        }
    }
    if(playerPressed === 'Escape'){
        gameover()
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function gameLoop(){
    const alphabet = getARandomAlphabets()
    const currentAlphabetsElement = document.getElementById('current-alphabets')
    currentAlphabetsElement.innerText = alphabet
    setBackgroundColorByID(alphabet)
}

function removeAlert(){
    const rmv = document.getElementById('alert')
    const alert = rmv.classList.add('hidden')
    return(alert)
}

function play(){
    hideElementByID('start-page')
    hideElementByID('final-score')
    showElementByID('playGround')
    setTextElementByID('current-life',5)
    setTextElementByID('current-score',0)
    gameLoop()
}

function gameover(){
    hideElementByID('playGround')
    showElementByID('final-score')
    const lastScore = getTextElementByID('current-score')
    setTextElementByID('last-score',lastScore)
    const currentAlphabet = getElementTextByID('current-alphabets')
    removeBackgroundColorByID(currentAlphabet)
}