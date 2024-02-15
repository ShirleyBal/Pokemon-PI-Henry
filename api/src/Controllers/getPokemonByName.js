const axios =require('axios')
const {Pokemon} =require('../db')
const { URL_API } = process.env;
module.exports=async(name)=>{

    try {
        const pokemondb=await Pokemon.findOne({where:{name:name}})// de mentira por ahora. se hara una busqueda en la db  
    if(!pokemondb){//si no hay resultado, entonces buscamos en la api
            const request=await axios.get(`${URL_API}/${name}`);
            const pokemon={
                id:request.data.id,
                name:request.data.name,
                image:request.data.sprites.other.home.front_default,
                life:request.data.stats[0].base_stat,
                stroke:request.data.stats[1].base_stat,
                defending:request.data.stats[2].base_stat,
                speed:request.data.stats[5].base_stat,
                height:request.data.height,
                weight:request.data.weight,
                types: request.data.types.map(e => {
                  return ({
                      name: e.type.name,
                      img: `https://typedex.app/images/ui/types/dark/${e.type.name}.svg`,
                  })
              }),
          } 
            return pokemon 
        }
        return pokemondb//falso
    } catch (error) {
        console.error('Error:', error.message);
        throw new Error('Error in fetching Pokemon');
    }
}
