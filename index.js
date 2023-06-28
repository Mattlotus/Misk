// dice roll theory

let dice 

function generateRandomNum (min , max){
    min = Math.ceil(min);
    max = Math.floor (max);
    return Math.floor (Math.random() * (max-min)+ min)
};

const diceNumber  = () =>{
  dice = generateRandomNum()
  console.log(dice)

}




 



