///////////////////////////////////////detail
import Navbar from "../Navbar/navbar";
import { getPokemosxId } from "../../Redux/Actions/actions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import loadingpokeball from "../../images/loadingpokeball.gif"
import style from "./detailpage.module.css";

export default function Detail (){
  console.log(Detail)
  let { id } = useParams();
  const detailPokemons = useSelector((state) => state.pokemonDetail);
  console.log(id)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemosxId(id));
   }, [dispatch, id]);

  console.log(detailPokemons, "detailpokemons")


  return (
    <div className={style.detailcontainer}>
      <Navbar />
       {
                detailPokemons.length === 0 ?
                <div>
                    <p className={style.noPoke}>Loading...</p>
                    <img src={loadingpokeball} alt="Not Poke" height="450px" width="950px "/>
                </div>
                :
                <div className={style.pokeDetails}>
                    <div className={style.firstDetails}>

                       <h2>ID:  {detailPokemons && detailPokemons.id}</h2>
                       <h3>Name:  {detailPokemons && detailPokemons.name}</h3>
                       <h3>Life:  {detailPokemons && detailPokemons.life}</h3>
                       <h3>Stroke:  {detailPokemons && detailPokemons.stroke}</h3>
                       <h3>Defending:  {detailPokemons && detailPokemons.defending}</h3>
                       <h3>Speed:  {detailPokemons && detailPokemons.speed}</h3>
                    
                    </div>

                    <div className={style.centerDetails}>
                      <img src={ detailPokemons.image ? detailPokemons.image : detailPokemons.image } alt="PokeImage" height="350px" width="350px" />
                    </div>

                    <div className={style.lastDetails}>
                      <h3>Height:  {detailPokemons && detailPokemons.height}</h3>
                      <h3>Weight:  {detailPokemons && detailPokemons.weight}</h3>
                      <h3>Types: {detailPokemons.types && detailPokemons.types.map((pt, index) => 
                      (<li key= {index}>{pt.name}</li>))}</h3>
                    </div> 
                      
                </div>
                
            }

    </div>
  );
}


