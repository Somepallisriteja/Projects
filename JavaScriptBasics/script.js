

//Function basics


/*function increaseHighScore(currentScore){

    var newHighScore = currentScore * 2;
    return newHighScore;


}
console.log(increaseHighScore(4));

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

console.log(peterParker.walk());     */



//Multiple CALL and ARGUEMENTS//

var multiplier = function(){
    var result = 1;
    for(var i = arguments.length -1; i >= 0; i--){
        result *= arguments[i];
    }
    return result;
}


console.log(multiplier(2,5,7,9));
