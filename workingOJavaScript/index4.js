{
    console.log(myVar); // Outputs: undefined
    var myVar = 5;
    console.log(myVar); // Outputs: 5
  }
  
  {
    console.log(myLet); // Error: Cannot access 'myLet' before initialization
    let myLet = 10;
    console.log(myLet); // Outputs: 10
  }
  
  {
    console.log(myConst); // Error: Cannot access 'myConst' before initialization
    const myConst = 15;
    console.log(myConst); // Outputs: 15
  }
  