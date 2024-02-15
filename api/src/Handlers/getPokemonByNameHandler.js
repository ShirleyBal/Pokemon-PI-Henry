const {getPokemonByName}=require('../Controllers')
module.exports=async(req,res)=>{
    try {     
        const {name}=req.query //query seria por ejemplo pokemon?name=pikachu
        const pokemon=await getPokemonByName(name)
        res.send(pokemon) 
    } catch (error) {
        res.status(404).send('Pokemon no encontrado')
    }
} 