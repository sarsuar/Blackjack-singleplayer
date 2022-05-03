"use strict"
function getRandomNum(max) {
    let randomNumber = Math.floor(Math.random() * max) + 1
    if (randomNumber == 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

let hasBlackJack = false
let isAlive = false
let cards = []
let sum = 0
let msg = ""

let msgShow = document.getElementById("message-el")
let sumShow = document.getElementById("sum-el")
let cardShow = document.getElementById("cards-el")

function startGame() {
    isAlive = true
    let x = getRandomNum(13)
    let y = getRandomNum(13)
    cards = [x, y]
    sum = x + y
    renderGame()
}

function renderGame() {
    sumShow.textContent += sum
    cardShow.textContent = "Cards:"
    for (let i = 0; i < cards.length; i++) {
        cardShow.textContent += cards[i] + " "
    }
    if (sum <= 20) {
        msg = "Do you want to draw a new card?"
    } else if (sum === 21) {
        msg = "Blackjack!!!"
        hasBlackJack = true
    } else {
        msg = "You suck"
        isAlive = false
    }

    console.log(msg)
    msgShow.textContent = msg


}

let number = 5

function newCard() {
    if (isAlive == true && hasBlackJack == false) {
        c = getRandomNum(13)
        cards.push(c)
        sum += c
        console.log(cards)
        renderGame()
    }
}