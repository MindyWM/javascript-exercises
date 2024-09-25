const convertToCelsius = function(fa) {
  let num= ((fa- 32) * 5/9).toFixed(1);
  return parseFloat(num);
};

const convertToFahrenheit = function(ce) {
  let num= ((ce * 9/5) + 32).toFixed(1);
  return parseFloat(num);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
