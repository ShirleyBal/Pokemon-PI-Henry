const {createNewPokemon}=require('../Controllers')
//Toda la información debe ser recibida por body.
module.exports=async(req,res)=>{
    try {
        const create=await createNewPokemon(req.body);
        res.send(create)
    } catch (error) { 
        res.status(404).send('Error when creating the Pokemon')
    }
} 