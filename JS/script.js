function handleKeyboardKeyUpEvent(event){
    const playerPressed = event.key;
    const currentAlphabetsElement = document.getElementById('current-alphabets')
    const currentAlphabets = currentAlphabetsElement.innerText
    const expectedAlphabets = currentAlphabets.toLowerCase()
    if(playerPressed === expectedAlphabets){
        console.log("Yeee! you pressed-",playerPressed,".You got a point")
        removeBackgroundColorByID(expectedAlphabets)
        const currentScoreElement = document.getElementById('current-score')
        const currentScoreText = currentScoreElement.innerText
        const currentScore = parseInt(currentScoreText)
        const newScore = currentScore + 1
        currentScoreElement.innerText = newScore
        gameLoop()
    }
    else{
        console.log("Ooo no! you pressed-",playerPressed,".Correct key was",expectedAlphabets,".You lost a life!!")
        const currentLifeElement = document.getElementById('current-life')
        const currentLifeText = currentLifeElement.innerText
        const currentLife = parseInt(currentLifeText)
        const newLife = currentLife - 1
        currentLifeElement.innerText = newLife
    }
}
document.addEventListener('keyup', handleKeyboardKeyUpEvent)


function gameLoop(){
    const alphabet = getARandomAlphabets()
    const currentAlphabetsElement = document.getElementById('current-alphabets')
    currentAlphabetsElement.innerText = alphabet
    setBackgroundColorByID(alphabet)
}


function play(){
    hideElementByID('start-page')
    showElementByID('playGround')
    gameLoop()
}