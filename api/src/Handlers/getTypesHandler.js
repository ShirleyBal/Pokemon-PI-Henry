const {getAllPokemonsTypes}=require('../Controllers')

module.exports =async(req,res)=>{
    try {
       const types=await getAllPokemonsTypes()
       res.send(types) 
    } catch (error) {
       res.status(404).send('Pokemon type not found')
    }
}