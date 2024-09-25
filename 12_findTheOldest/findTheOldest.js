const findTheOldest = function(personas) {//parametro de la lista de objetos
    let i = 0,menor=0,mayor=0,persona_mayor;
while(personas[i]==true){
    i++;
}
personas.forEach(function(persona){
    let edad;
    if(persona.yearOfDeath !=undefined){
    edad=persona.yearOfDeath-persona.yearOfBirth;
    }else{
        const fechaActual = new Date().getFullYear();
        edad= fechaActual-persona.yearOfBirth;
    }
    
    if(edad>mayor){
    mayor=edad;
    menor=mayor;
    persona_mayor=persona;
    }else{
        menor=edad;
    }
});


   return persona_mayor;
  };
  

// Do not edit below this line
module.exports = findTheOldest;
