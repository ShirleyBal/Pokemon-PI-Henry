const {Pokemon,Type} =require('../db')
module.exports=async({name,image,life,stroke,defending,speed,height,weight,type})=>{
  try {
    // console.log(name,image,life,stroke,defending,speed,height,weight); //descomentar cuando se conecte con front
    const typedb=await Type.findOne({where:{name:type}})//buscamos el type que esta en nuestra db 
    const create = await Pokemon.create({
        name,
        image,
        life, 
        stroke,
        defending,
        speed,
        height,
        weight,
      });
      await create.addType(typedb)///vinculamos el type con el pokemon
      return create
  } catch (error) {
     console.log(error)
  }
}