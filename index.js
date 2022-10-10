// first code 
// let Myage = 19;

// const { Button } = require("bootstrap")

// console.log(Myage);
// let MyAge = 19
// let humanDogRatio = 7
// let MyDogAge = MyAge * humanDogRatio
// console.log( MyDogAge)
// let bonusPoints = 50
// count = bonusPoints
// console.log(count)
// count = count + 50
// console.log(count)
// count = count - 75
// console.log(count)
// count = count + 45
// console.log(count)
// function increment() {
//     console.log('button clicked')
// }
// function dela(){
//     console.log(42)
// }
// dela()


// function delali(){
//     let lap1 = 34
//     let lap2 = 33
//     let lap3 = 36
//     count = lap1 + lap2 + lap3
//     console.log(count)
// }
// delali()

// let lapcompleted= 0

// function increment(){
//     lapcompleted = lapcompleted + 1
// }
// increment()
// increment()
// increment()
// console.log(lapcompleted)
// let countEl = document.getElementById('count-el')
// console.log(countEl)
// let saveEl = document.getElementById('save-el')

// let count = 0

// function increment(){
//     count += 1
//     countEl.textContent = count

// }
// function save(){
//     console.log(count)
//     let saveAs = count + ' - '
//     saveEl.textContent += saveAs
//     count = 0
//     countEl.textContent = count
// }
   
// let firstName = 'Ernest'
// let greeting = ' Hi there'
// let fullName = greeting +', '+ firstName +'!'

// function test(){
//     console.log(fullName)
// }
// test()

// let myPoints = 3

// function add3Points(){
//    myPoints += 3
// }
// function remove1point(){
//     myPoints -= 1
// }
// add3Points()
// add3Points()
// add3Points()
// remove1point()
// remove1point()
// console.log(myPoints)

// let errorEl = document.getElementById('error')

// let msg = 'Something went wrong, please try again'
// console.log(errorEl)
// function test(){
    
//     errorEl.textContent = msg
   
   
// }
// let service = "you have 3 new notifications"
// console.log(service)


// let client = 'you have three new notifications'
// let user = 'per'

// let messagetoUser = client  + ', ' +  user
// console.log (messagetoUser)
// let welcomeEl = document.getElementById('welcome-el')
// console.log(welcomeEl)

// let names = 'Dela'
// let greeting = ' Hi, my name is '
// let myGreet = greeting + names

// welcomeEl.innerText = myGreet
// welcomeEl.innerText += "👋"
//basketball project
// let homeScore = 0
// let awayScore = 0
// let boardEl =document.getElementById('board')
// console.log(boardEl)
// let boardEl2 = document.getElementById('board2')
// console.log(boardEl2)
// home
// function plusone(){
//     homeScore += 1
//     boardEl.textContent = homeScore
// }
// function plustwo(){
//     homeScore += 2
//     boardEl.textContent = homeScore
// }
// function plusthree(){
//     homeScore += 3
//     boardEl.textContent = homeScore
// }
// away
// function plusone1(){
//     awayScore += 1
//     boardEl2.textContent = awayScore
// }
// function plustwo2(){
//     awayScore += 2
//     boardEl2.textContent = awayScore
// }
// function plusthree3(){
//     awayScore += 3
//     boardEl2.textContent = awayScore
// }
// function reset(){
//     homeScore = 0
//     awayScore = 0
//     boardEl.textContent = homeScore
//     boardEl2.textContent = awayScore
// }

let cards = []
let result = 0
let hasBlackJack = false
let isActive = false
let message = ' '


let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardEl = document.getElementById('card-el')
let playerEl = document.getElementById('player-el')



function getRandomCard(){
    let randomNum = Math.floor(Math.random()*13) + 1
    if (randomNum === 1){
        return 11
    }
    else if (randomNum > 10){
        return 10
    }
    else{ return randomNum}
   
}

function start(){
    isActive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    result = firstCard + secondCard
    render()}

function render(){
    if (result <= 20){
        message = 'Do you want to draw a new card?'
            
    }
    else if(result ===21){
        message = "You've got a blackjack"
        hasBlackJack = true
        player.chips += 5
        playerEl.textContent = player.name + ':' + ' $' + player.chips

    }else{message = 'You are out of the game'
        isActive = false    
    }
    sumEl.textContent = 'Sum:' + " " + result  
    messageEl.textContent = message
    cardEl.textContent = 'Cards: ' 
    for (let i = 0; i < cards.length; i++){
        cardEl.textContent += cards[i] + ' '
    }
}

function newcard(){
    console.log('Drawing new card from the deck?')
    if(isActive === true && hasBlackJack === false){
        let card = getRandomCard()
        
        result += card
        cards.push(card)
        
        render()
    }
  
}
let player = {
    name: 'Dela',
    chips: 0
}

playerEl.textContent = player.name + ':' + ' $' + player.chips

let airbnb = {
    name: "castle",
    isAvailable: true,
    price: 600,
    places: ['london' , 'Accra']

}
console.log(airbnb.name , airbnb.places)
// for (i=0; i<cards.length; i++ ){
//     console.log(cards[i])
// }
// let mySkills = [
//     'Ernest',
//      45,
//      true,

// ]
// console.log(mySkills[0])
// console.log(mySkills[1])
// console.log(mySkills[2])
// console.log(mySkills[3])
// console.log(mySkills[4])

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]

//  messages.push("Same here!")
//  messages.pop();
//  console.log(messages)

// let mySkills = [ 
//     'photoshop',
//      'premier pro', 
//      'lightroom', 
//      'after effects',
//     'javascript',
//     'react' ]
//     let experience = ["CEO at Scrimba", "Frontend developer at Xeneta", "People counter for Norstat"]
//     console.log(experience[2])
//     console.log(experience[1])
//     console.log(experience[0])

// let myInterest = ['Delali', 24, true]

// let messages = [
//     "Hey, how's it going?",        
//     "I'm great, thank you! How about you?",
//     "All good. Been working on my portfolio lately."
// ]
// messages.push("same here!")
// console.log(messages)
// messages.pop()
// console.log(messages)

// for (let count = 10; count <=20; count += 1){
//     console.log(count)
// }

// for ( i = 0; i <=100; i += 3){9
//     console.log(i)
// }
// let sentence = ["Hello", "my", "name", "is", "Per"] 
// let greetingEl = document.getElementById("greeting-el")

// for(let i=0; i< sentence.length; i++){
//     greetingEl.textContent += sentence[i] + ' '
// }
// let player1Time = 102
// let player2Time = 107

// // cmd+d - ctrl+d
// function getFastestRaceTime() {
//     if (player1Time < player2Time) {
//         return player1Time
//     } else if (player2Time < player1Time) {
//         return player2Time
//     } else {
//         return player1Time
//     }
// }
// function totalRaceTime(){
//     return player1Time + player2Time 
// }
// let timeFast = totalRaceTime()
// console.log(timeFast)
// let randomNumber = Math.random() * 6

// console.log(randomNumber)
// let flooredNumber = Math.floor(3.45632)

// console.log(flooredNumber)
// let randomNumber = Math.floor( Math.random() * 6  )+ 1;



// console.log(randomNumber)

/* 

What does Math.random() do?

Your answer: 

*/

 function rollDice(){
    let randomNumber = Math.floor(Math.random() * 6) + 1 
    return randomNumber
}

console.log (rollDice())
let person = {
    name: 'Ernest',
    age: 22,
    country: 'Ghana'
}
function logData(){
    console.log(person.name + ' is ' + person.age + ' years old and lives in' +  ' '+ person.country)
    
}
console.log(logData())