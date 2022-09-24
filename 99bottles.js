var numberOfBottles = 99;

function beerLyrics(){
while (numberOfBottles > 0){
  var song = numberOfBottles  + " bottles of beer on the wall \n" + numberOfBottles  + " bottles of beer \n"+ "Take one down, pass it around\n"+(numberOfBottles -1 )  + " bottles of beer on the wall \n";

  console.log(song) ;
  numberOfBottles--
}
 console.log("No more bottles of beer on the wall")
}
beerLyrics();