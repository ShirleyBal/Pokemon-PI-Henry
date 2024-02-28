import style from "./formpage.module.css"
import { useState ,useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {getAllPokemonsTypes, postPoke} from "../../Redux/Actions/actions"
import validation from "./validate";
import { Link } from "react-router-dom";

export default function Form() {
  const dispatch=useDispatch();
  const types = useSelector(state=>state.types)
  useEffect(()=>{
    dispatch(getAllPokemonsTypes())
  },[dispatch])
  
  //Estado inciial
  const initialFormData = { 
    name: "",
    image: "",
    life: "",
    stroke: "",
    defending: "",
    speed: "",
    height: "",
    weight: "",
    type: [],
  };

  const [formData, setFormData] = useState(initialFormData)

  // Errros:
  const [errors, setErrors] = useState({})
    
  const handleChange = (event) => {
    event.preventDefault();
    const {value,name} =event.target;

    setFormData({
      ...formData,
      [name] : value
    })    
    //Validar los datos del formulario
  const formErrors = validation(formData);
    setErrors(formErrors);

}

  const handleTypes = (event) => {
    event.preventDefault();
    const {value} =event.target;
    const newTypes = formData.type;//copiamos los tipos que ya esten
    const norepeat = newTypes.filter((i)=> i=== value).length === 0// para ver si se repiten 
    if(value !== "default " && norepeat)
    newTypes.push(value);// le agregamo el que seleccionemos
  
    setFormData({
    ...formData,
    type: newTypes,
    });
    setErrors(
      validation({
        ...formData,
        type:types
      })
    );
}

const handleCreate = (event) => {
  event.preventDefault();
  console.log("handlecreate")

  const formErrors= validation(formData);
  setErrors(formErrors);
  if(Object.keys(formErrors).length === 0) {
    console.log("hola",formErrors)
    dispatch(postPoke(formData));
    resetForm();
  }
}

//Le agrego el reset para que borre todo
const resetForm = () => {
  setFormData(initialFormData)
}
//Remover types seleccionados 
const remove = (event) => {
  const typeName = event.target.id;
  if (typeName) {
    setFormData({
      ...formData,
      type: formData.type.filter((x) => x !== typeName),
    });
  }
};


console.log(formData)

    return (
      <div className={style.formcontainer}>
        
        <Link to="/home">
           <button>Home</button>
         </Link>
        <div className={style.form}>

          <h1>Create pokemon</h1>

          <form>
          <label>
            Nombre:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.name}
                                </span> )
            }
          </label>
          <label>
            Imagen:
            <input type="text" name="image" value={formData.image} onChange={handleChange} />
            {errors.image && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.image}
                                </span> )
            }
          </label>
          <label>
            Vida:
            <input type="text" name="life" value={formData.life} onChange={handleChange} />
            {errors.life && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.life}
                                </span> )
            }
          </label>
          <label>
            Ataque:
            <input type="text" name="stroke" value={formData.stroke} onChange={handleChange} />
            {errors.stroke && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.stroke}
                                </span> )
            }
          </label>
          <label>
            Defensa:
            <input type="text" name="defending" value={formData.defending} onChange={handleChange} />
            {errors.defending && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.defending}
                                </span> )
            }
          </label>
          <label>
            Velocidad:
            <input type="text" name="speed" value={formData.speed} onChange={handleChange} />
            {errors.speed && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.speed}
                                </span> )
            }
          </label>
          <label>
            peso:
            <input type="text" name="weight" value={formData.weight} onChange={handleChange} />
            {errors.weight && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.weight}
                                </span> )
            }
          </label>
          <label>
            altura:
            <input type="text" name="height" value={formData.height} onChange={handleChange} />
            {errors.height && (
                                <span className={style.spanError}
                                    style={{ color: "#e74c3c" }}>
                                    {errors.height}
                                </span> )
            }
          </label>

          {/* Los tipos pueden ser más asi que tengo que ver como poner las opciones porque son más. MAPEOOO*/}
          {/* ir tachando los seleccionados si quiero sacarlos */}
          <label>
            Tipos:
            <select onChange={handleTypes}>
              <option value="default">Seleccione un tipo</option>
              {
                types?.map((type,key)=> 
                 <option key={key}> {type.name } </option> 
                )
              }             
            </select>
              {
                formData.type.map(p => <div key={p}><span id="default">{p}<button type="button" id={p} name='default' onClick={remove}>x</button></span></div>)
              } 
          </label>
          
          <button type="button" onClick={handleCreate}>Create Pokémon</button>
        </form>

        </div>
     </div>
    );
}
//////////////////////////////////