const fibonacci = function(num) {
 
    if(num==1){
return 1;
    }
    if(num==0){
return 0;
    }
    if(num<0){
return "OOPS";
    }else{
    let num_viejo=0,num_actual=1,suma=0;
for(let i=1;i<num;i++){
suma=(num_viejo+num_actual);
num_viejo=num_actual;
num_actual=suma;
}
return suma;
    }
};

// Do not edit below this line
module.exports = fibonacci;
