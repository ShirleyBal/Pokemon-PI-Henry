//Este seria el index de los handlers (archivo principal), osea que se traen los handlers creados ,
//para exportarlos todos juntos como un objeto 
//en otros archivo lo usariamos asi : const {nombredefuncion} = require('ruta a este archivo')
module.exports={
    getPokemonsHandler:require('./getPokemonsHandler'),
    getPokemonsByIdHandler:require('./getPokemonsByIdHandler'),
    getPokemonByNameHandler:require('./getPokemonByNameHandler'),
    getTypesHandler:require('./getTypesHandler'),
    createNewPokemonHandler:require('./createNewPokemonHandler'),
}