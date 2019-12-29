// count the characters from a string and print them out

const countCharacters = (str) => {
  //making the map
  let mymap = new Map()
  characters = "madany diallo"
  //you split every string into indiviual characters
  for (let characters of str.split('')){
    //If the map has the character
    if (mymap.has(characters)) { 
      //you get the value from the map and you add 1 to the counter
      mymap.set(characters, mymap.get(characters) + 1)
    } // need this because for example if it does not have it can add it.
    else {
      mymap.set(characters, 1);
    }
  }
 
 return mymap;
}

console.log(countCharacters("Madany"));
console.log(countCharacters("Missisippi"));
console.log(countCharacters("SalvadoreGiterresiz"));
