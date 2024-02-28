//el validate se utiliza para asegurarse de que todas las propiedades necesarias estén presentes en el 
//cuerpo de las solicitudes que involucran la creación o actualización de Pokémons.

const validate = (req,res,next) => {
    const { name, image, life, stroke, defending, speed, height, weight } =
    req.body;
    if(!name) return res.status(400).send({error: "Missing name"})
    if(!image) return res.status(400).send({error: "Missing image"})
    if(!life) return res.status(400).send({error: "Missing life"})
    if(!stroke) return res.status(400).send({error: "Missing stroke"})
    if(!defending) return res.status(400).send({error: "Missing defending"})
    if(!speed) return res.status(400).send({error: "Missing speed"})
    if(!height) return res.status(400).send({error: "Missing height"})
    if(!weight) return res.status(400).send({error: "Missing weight"})
    next();
}
module.exports = validate; 


//Validar desde el back
