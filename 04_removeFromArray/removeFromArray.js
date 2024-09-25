const removeFromArray = function(arreglo, ...excluir) {
    const nuevoArray = [];
let i=0;
while(i<=arreglo.length){
    if (!excluir.includes(arreglo[i])) {
        nuevoArray.push(arreglo[i]);
      }
i++
}
    return nuevoArray;
  };

module.exports = removeFromArray;
