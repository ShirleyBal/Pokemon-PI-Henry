const axios = require("axios");
const { Pokemon ,Type} = require("../db");
const { URL_API } = process.env;
const { reduceApiData } = require("../Utils");
module.exports = async () => {
  try { 
    const pokemonsDB = await Pokemon.findAll({
      include: [
        { model: Type, attributes: ["name"]}
      ],
    }); ///buscamos en nuestra db si hay informacion de pokemones
    const pokemonsApiPageOne = await axios.get(URL_API);
  
    ///solo traeremos las info de la api y la guardaremos
    //si en nuestra db tenemos menos de 120 pokemones
    const pokemonsApiPageTwo = await axios.get(pokemonsApiPageOne.data.next);
    const pokemonsApiPageThree = await axios.get(pokemonsApiPageTwo.data.next);
    const pokemonsApiPageFour = await axios.get(pokemonsApiPageThree.data.next);
    const pokemonsApiPageFive = await axios.get(pokemonsApiPageFour.data.next);
    const pokemonsApiPageSix = await axios.get(pokemonsApiPageFive.data.next);
    const AllPokemonsApi = []
      .concat(pokemonsDB ?? [])
      .concat(pokemonsApiPageOne.data.results)
      .concat(pokemonsApiPageTwo.data.results)
      .concat(pokemonsApiPageThree.data.results)
      .concat(pokemonsApiPageFour.data.results)
      .concat(pokemonsApiPageFive.data.results)
      .concat(pokemonsApiPageSix.data.results);
    const reduceData =await  reduceApiData(AllPokemonsApi);
    return [].concat(pokemonsDB).concat(reduceData);
  } catch (error) {
    console.log(error)
  }
};
