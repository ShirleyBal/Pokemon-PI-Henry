const { Router } = require('express');

const router =Router()
const {getPokemonsHandler,getPokemonsByIdHandler,getPokemonByNameHandler,createNewPokemonHandler}=require('../Handlers')
///aqui se haran todas las rutas relacionadas a informacion de los pokemones
router.get('/all',getPokemonsHandler)
router.get('/',getPokemonByNameHandler)
router.get('/:id',getPokemonsByIdHandler)
router.post('/',createNewPokemonHandler)
module.exports = router;