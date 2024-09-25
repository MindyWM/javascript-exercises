const sumAll = function(num1, num2) {
let i=0,resultado=0, mayor=0;
if(num1<num2|num1==num2){
i=num1;
mayor=num2;
}else if(num1>num2){
i=num2;
mayor=num1;
}

while (i<=mayor){
    if(!Number.isInteger(num1)|!Number.isInteger(num2)|
num1<0|num2<0){
        resultado="ERROR";
        break;
    }
resultado+=i;
i++;
 }
return resultado;
};

module.exports = sumAll;
