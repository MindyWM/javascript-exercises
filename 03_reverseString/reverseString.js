const reverseString = function(cadena) {
let cadena_largo=cadena.length,nuevaCadena="";
for(let i=cadena_largo-1; i >=0;i--){
nuevaCadena+=cadena[i];
}
return nuevaCadena;
};
// Do not edit below this line
module.exports = reverseString;
