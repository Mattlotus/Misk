// CREATE ALL 6 CHARACTERS from different universes.
let azula = {
    name: "Azula",
    health: 150 ,
    fireWheel : 20 , 
    lightning  : 50 , 
    sozinComet: 85,
    image:"https://static.tvtropes.org/pmwiki/pub/images/azula_full.png"
};

let zuko = {
    name : "Zuko",
    health: 200 , 
    fireBall : 20 ,
    fireWave :40,
    dragonBreathe : 70,
    image:"https://img.favpng.com/9/9/13/zuko-katara-azula-aang-desktop-wallpaper-png-favpng-h4rdnXizDXjjUnsN6r3WgzF8B_t.jpg"
};

let pikachu = {
    name: "Pikachu",
    health : 130,
    bolt:25,
    tailWhip:15,
    thundershock : 60,
    image:"https://www.freeiconspng.com/thumbs/pikachu-transparent/pikachu-transparent-hd-1.png"


}

let squirtle = {
    name: "Squirtle",
    health: 150,
    waterGun: 25,
    rollOut: 10,
    hydroPump: 70,
    image:"https://assets.stickpng.com/images/580b57fcd9996e24bc43c32a.png"

}

let johnWick = {
    name: "John Wick",
    health: 200,
    pistolWhip: 15,
    pencil : 40,
    headshot: 70,  
    image:"https://w7.pngwing.com/pngs/900/728/png-transparent-keanu-reeves-john-wick-film-director-punisher-others-microphone-film-formal-wear-thumbnail.png"
}
let coachCarter = {
    name: "Coach Carter",
    health: 300,
    motivationalSpeech: +25,
    benched: 30,
    pointFinger : 45,
    mofo: 80, 
    image:"https://c8.alamy.com/comp/2JHKTJ8/samuel-l-jackson-coach-carter-2005-2JHKTJ8.jpg"
}

// add choose character functions
let question ;
let playerContainerOne= document.querySelector("#playerOnePic")
let playerContainerTwo= document.querySelector("#playerTwoPic")
let player1
let player2 

//  LET PLAYERS CHOOSE ONE CHARACTER .
function playerOneChoose(character,) {
    console.log(question)
   if ( question == "1"){
    player1=character
    console.log("player1 is", player1)
    console.log(playerContainerOne)
    playerContainerOne.setAttribute("src",character.image)
    question = false
   }else {
    player2 = character
    console.log("player 2 is", player2)
    console.log("player 2 choose")
    console.log(character)
    playerContainerTwo.setAttribute("src",character.image)
   }
}

function askQuestion(){

   return question = prompt( "player 1 or player 2")
    console.log(question)
}

// PLAYER 1 GOES FIRST. ROLL DICE TO DETERMINE ATTACK
let dice 

function generateRandomNum (min , max){
    min = Math.ceil(min);
    max = Math.floor (max);
    return Math.floor (Math.random() * (max-min + 1)+ min);
}

const diceNumber  = () =>{
  dice = generateRandomNum(1 , 6)
  console.log(dice)

}

function attack(){
    console.log("attack")
    if(attack = 1){
        console.log("MISS")

    }else{ attack === 2 || 4 || 6
        console.log("HIT")
    }

}

 



//  switch (dice) {
//     case 
//  }




// IF PLAYER ROLLS A NUMBER THAT IS NOT ON THEIR CARD.ATTACK MISS!!
// If player 2 survives player 2 rolls next
// KEEP ROLLING TILL SOMEBOBDY DIES.
// LAST MAN STANDING WINS GAME