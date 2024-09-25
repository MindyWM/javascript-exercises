const repeatString = function(char, num) {
let i=0, cadena="";
if(num<i){
return "ERROR";
}else{
while(i<num){
cadena+=char;
i++;
}
return cadena;
 }
}

// Do not edit below this line
module.exports = repeatString;
