const {getPokemonById}=require('../Controllers')
module.exports=async(req,res)=>{
    try {
       const {id}=req.params
       const pokemon=await getPokemonById(id)
       res.send(pokemon) 
    } catch (error) {
       res.status(404).send('Pokemon not found')
    }
} 