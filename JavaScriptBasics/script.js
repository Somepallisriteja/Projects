//var MyScore = 500;
//var HighScore = 600;

//var greeting = MyScore + HighScore;

var greeting = "";


var MyFavourites = ["Kohli", "Dhoni", "Williamson", "ABD"];
var i;
for(i=0; i<MyFavourites.length; i++){


  greeting += MyFavourites[i] + "<br>";
}


//greeting += MyFavourites[1] + "<br>";
//greeting += MyFavourites[2] + "<br>";
//greeting += MyFavourites[3] + "<br>";







document.getElementById("test").innerHTML = greeting;
