const palindromes = function (cadena) {
cadena=cadena.replace(/[,.!¡?¿\s]/g, '').toLowerCase().split("");
cadena_original=cadena.join("");
cadena_reversa=cadena.reverse();
cadena_reversa=cadena_reversa.join("");
if(cadena_original==cadena_reversa){
return true;
}else{
    return false;
}
};

// Do not edit below this line
module.exports = palindromes;
