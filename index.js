


//The receivesAFunction function should://

function receivesAFunction(cheat){
    return cheat();
  }
  console.log(receivesAFunction(cheat));
  
  
  //The returnsANamedFunction function should://
  
  
  function returnsANamedFunction(){
    return function named(){};
  }
  
  //The returnsAnAnonymousFunction function//
  
  function returnsAnAnonymousFunction(){
    return function (){
    };
  }
  console.log(returnsAnAnonymousFunction());