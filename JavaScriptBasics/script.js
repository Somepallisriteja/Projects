

//Function basics


/*function increaseHighScore(currentScore){

    var newHighScore = currentScore * 2;
    return newHighScore;


}
console.log(increaseHighScore(4)); */

//Prototyping a function

var walk = function(){

    return("He is able to walk..!");
}

var SuperHero = function(){

    var power,villian;
}

SuperHero.prototype.walk =walk;

peterParker = new SuperHero;
peterParker.power = "fly";
peterParker.walk();

console.log(peterParker.walk());



