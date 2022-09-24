// var output = [];
 var count ;


function fizzBuzz(){
    for (count=1; count <= 100; count++)
    
    {
        if((count%3==0 )&& (count%5==0)){
            console.log( "fizz Buzz")
        }
          else if(count%5===0){
            console.log("Buzz")
          }
            else if (count%3 === 0 ){
              console.log("Fizz ")
            }
        
        else{
            console.log( count);
        }
        
    }
   // output.push(count);
   // console.log(output);
    
}

fizzBuzz();