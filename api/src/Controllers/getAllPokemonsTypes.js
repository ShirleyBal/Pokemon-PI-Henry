const {Type} =require('../db')
const axios = require("axios");
module.exports = async () => {
  try {
    const typesDb=await Type.findAll();//buscamos si ya guardamos los tipos en nuestra db ,
    if(!typesDb.length){///si no encontramos nada entonces hacemos la peticion a la api y
      const request = await axios.get("https://pokeapi.co/api/v2/type");
      const types = request.data?.results.map(i=>i.name);//array con nombre de los tipos de pokemones
      
      // procedemos a guardar los resultados en nuestra db :
       
      await types.forEach(element => {//for each es igual a "por cada ", en este caso por cada tipo dentro array crearemos un nuevo dato en la db
          Type.create({name:element})
        });
      return types 
    }
    //si en nuestra db ya hay types , solo retornamos el resultado
    return typesDb
  } catch (error) {
    console.log(error);
  }
};
