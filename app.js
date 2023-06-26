// CREATE ALL 6 CHARACTERS. 3 CHARACTERS IN EACH PLAYERS DECK. ATLA THEME.
let azula = {
    name: "Azula",
    health: 150 ,
    fireBreathe : 10 , 
    lightning  : 50 , 
    sozinComet: 85,
};

let zuko = {
    name : "Zuko",
    health: 200 , 
    fireBall : 40 ,
    teaSpill : -20,
    dragonBreathe : 60
};

let pikachu = {
    name: "Pikachu",
    health : 100,
    bolt:25,
    tailWhip:15,
    thundershock : 60,
}

let squirtle = {
    name: "Squirtle",
    health: 150,
    waterGun: 25,
    rollOut: 10,
    hydroPump: 70,

}

let johnWick = {
    name: "John Wick",
    health: 200,
    pistolWhip: 15,
    pencil : 40,
    headshot: 70,  
}
let coachCarter = {
    name: "Coach Carter",
    health: 300,
    motivationalSpeech: +25,
    benched: 30,
    pointFinger : 45,
    mofo: 80, 
}
var imageArray = ["https://i.pinimg.com/originals/bc/34/d6/bc34d65e7581ee6e17fbd6fd3d30490a.jpg", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/8d40e9ca-1974-4a87-bbfa-165264db741b/dfr8tm2-cdd27f16-6ca9-4674-869f-56977216e6ee.png/v1/fill/w_581,h_1009/zuko__avatar__render_by_soul151killer_dfr8tm2-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTAwOSIsInBhdGgiOiJcL2ZcLzhkNDBlOWNhLTE5NzQtNGE4Ny1iYmZhLTE2NTI2NGRiNzQxYlwvZGZyOHRtMi1jZGQyN2YxNi02Y2E5LTQ2NzQtODY5Zi01Njk3NzIxNmU2ZWUucG5nIiwid2lkdGgiOiI8PTU4MSJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.MdH85UbkGAXBwaeVmuKyeWOPjOZypydlscif-kvft8c" ;]
var totalImageNumber = imageArray.length -1
var chooseImageNumber = 0 
function changeCharacter(){
    chooseImageNumber += 1
  var image =  document.querySelector("img")
  image.setAttribute("src",[imageArray])
}
//  LET PLAYER ONE CHOOSE ONE CHARACTER OUT OF THE THREE.
// LET PLAYER TWO CHOOSE ONE CHARACTER OUT OF THE THREE.
// PLAYER 1 GOES FIRST
// ROLL DICE TO DETERMINE ATTACK
// KEEP ROLLING TILL SOMEBOBDY DIES.
// LAST MAN STANDING WINS GAME