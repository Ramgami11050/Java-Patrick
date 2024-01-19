function INITIATE(){
if (INITIATE)
var cadena
cadena = (prompt(""));
if (cadena)
 function LOL
    for (let i = 0; i < 9; i++) {
      if(i%3==0){
        cadena = cadena + "*";
      }else{
        if(i%3==1){
          cadena = cadena + "+";
        }else {
          cadena = cadena + "_";
        }
      }
    
      switch(i%3){
        case 0:
          cadena = cadena + "*";
          break;
        case 1:
          cadena = cadena + "+";
          break;
        default:
          cadena = cadena + "_";
          
      }
    }
    console.log(LOL)
    return cadena; // returns back to the var to begin the function again in a loop
  }
}