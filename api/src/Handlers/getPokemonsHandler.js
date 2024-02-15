const {getAllPokemonsData}=require('../Controllers')
module.exports=async(req,res)=>{
    const Data=await getAllPokemonsData()
    res.send(Data)
} 