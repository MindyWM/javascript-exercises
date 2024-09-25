let array=[];

const add = function(a, b) {
	return a+b;
};

const subtract = function(a, b) {
	return a-b;
};

const sum = function(array) {
	let i=0, res=0;
  while(i<array.length){
res+=array[i];
i++;
  }
  return res;
};

const multiply = function(array) {
	let i=0, res=1;
  while(i<array.length){
res*=array[i];
i++;
  }
  return res;
};

const power = function(a,b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
  let i=1,num1=1;
  while(i<=n){
    num1*=i;
    i++;
  }
  n=num1;
	return n;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
