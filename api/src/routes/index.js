const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();
router.use("/pokemons", require("./pokemons")); //en la ruta pokemons , usara todas las rutas que se configuren en el archivo pokemons.js
router.use("/types", require("./types")); ////en la ruta types , usara todas las rutas que se configuren en el archivo types.js
module.exports = router;
