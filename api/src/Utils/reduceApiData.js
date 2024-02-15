const axios = require("axios");

// module.exports=async(data)=>{///esta funcion, recibe el array de pokemones de la api , y lo devuelve filtrado
//     //osea solo con los atributos que pide el readme
//      const pokemons=await data.map(p=>{
//         axios.get(p.url).then()

//      })
//     return pokemons
// }

//////////////////////////////////
//types para filtrar

module.exports = async (data) => {
  // Esta función recibe un array de objetos con la estructura { name, url }

  // Utilizamos Promise.all para realizar múltiples llamadas simultáneas a las URLs
  const pokemonDetails = await Promise.all(
    data.map(async (pokemon) => {
      try {
        // Realizamos la llamada a la URL del Pokémon
        const response = await axios.get(pokemon.url);
        // Extraemos la información necesaria
        const { name, height, weight, types, sprites, stats ,id} = response.data;
        // Creamos un objeto con la información filtrada
        const filteredPokemon = {
          id,
          name,
          image: sprites.other.home.front_default,
          life: stats[0].base_stat,
          stroke: stats[1].base_stat,
          defending: stats[2].base_stat,
          speed: stats[5].base_stat,
          height,
          weight,
          types: types.map(e => {
            return ({
                name: e.type.name,
                img: `https://typedex.app/images/ui/types/dark/${e.type.name}.svg`,
            })
        }),
        };
        return filteredPokemon;
      } catch (error) {
        console.error(
          `Error al obtener detalles para el Pokémon ${pokemon.name}: ${error.message}`
        );
        return null;
      }
    })
  );
  // Filtramos cualquier objeto nulo que pueda haberse creado en caso de error
  const validPokemonDetails = pokemonDetails.filter(
    (pokemon) => pokemon !== null
  );

  return validPokemonDetails;
};
