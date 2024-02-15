const axios =require('axios')
const { URL_API } = process.env;
const {Pokemon} =require('../db');
const { Error } = require('sequelize');
module.exports=async(id)=>{
    try {
        if(id.length<6){//si el id tiene menos de 6 caracteres significa que se pide un pokemon de la api y no de la db
        const request=await axios.get(`${URL_API}/${id}`);
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
        }else{
           const pokemondb= await Pokemon.findByPk(id)
           return pokemondb
        }
    }catch (error) {
        console.error('Error:', error.message);
        throw new Error('Failed to fetch Pokemon data');
    }
   
}