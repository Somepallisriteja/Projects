
    var Keylist = "abcdefghijklmnopqrstuvwxyz1234567890@§$%&!";
      var tmp = ''
      function generatePass(plength){
         tmp = ''
          for(i = 0; i<plength; i++){
               tmp += Keylist.charAt(Math.floor(Math.random()* Keylist.length))
          }
          return tmp
      }
      
      function populateform(enterlength){
          document.passGen.output.value = generatePass(enterlength)
     }

/* var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
var info = 'My cats are called ';
var para = document.querySelector('p');

for (var i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}

para.textContent = info;
console.log(info);  */