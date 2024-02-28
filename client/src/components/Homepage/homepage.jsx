import {useDispatch, useSelector} from "react-redux"
import { useEffect, useState } from "react";
import { getpokemons, getNamePokemons, getAllPokemonsTypes, filterByType } from "../../Redux/Actions/actions";
import Navbar from "../Navbar/navbar";
import Card from "../Card/card";
import style from "./homepage.module.css"
import { reload, orderByAbc, orderByStroke, filterApiorDB } from "../../Redux/Actions/actions"; 
import Paginate from "../Paginate/paginate";

export default function Home() {
    console.log('Home')

    ////////////////////para traer las cards:
    const allPokemons= useSelector(state=> state.allPokemons);
    const types= useSelector(state=> state.types);
    
    const dispatch=useDispatch()

    useEffect(()=>{
      dispatch(getpokemons())
      dispatch(getAllPokemonsTypes())
    },[]);
    
    ///////////////////search:
    const pokemonsFiltered = useSelector((state) => state.pokemonsFiltered);
    
    // Función búsqueda/actions
    const handleSearch = (searchName) => {
      dispatch(getNamePokemons(searchName));
    }
    
    ///////////////////Paginado:
    const [currentPage, setCurrentPage] = useState(1);                  //actual 
    const pokemonsPerPage = 12;                                         
    //calcular
    const indexOfLastPokemon = currentPage * pokemonsPerPage;          
    const indexOfFirstPokemon = indexOfLastPokemon - pokemonsPerPage;  
    const currentPokemons = allPokemons.slice(indexOfFirstPokemon, indexOfLastPokemon);                          

    // Función:
    const paginado = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    /////////////////////Filtros: tienen que ir en el home todo
    //Filtro por attack
    const handleTipStrong = (e) => {
        e.preventDefault();
        const MinorMax = e.target.value ; 
        dispatch(orderByStroke(MinorMax));
    }
 
    const handleAscDesc = (e) => {
        e.preventDefault();
        dispatch(orderByAbc(e.target.value));
    }

    const handleTypes = (e) => {
        e.preventDefault();
        dispatch(filterByType(e.target.value));
        setCurrentPage(1)
    }

    const handleAllApiBd = (e) => {
        e.preventDefault()
        dispatch(filterApiorDB(e.target.value))
        setCurrentPage(1)
    }

    //Boton para reiniciar
    function handleReload(e){
        e.preventDefault();
        dispatch(reload(e));
    }

    //Cosas que faltan:
    //-Cuando el usuario busca un pokemon que no existe, debe de decirle que no existe
    //-El boton del formulario debe de estar desactivado y las validaciones estan al mismo
    //    tiempo todos(arreglar). Avisar si se creo o no el pokemon

    return (
      <div className={style.homeconteiner}>
          <Navbar onSearch={handleSearch} />
         
      <div className={style.filtersconteiner}>
            
            <div>
                <button className={style.reload} onClick={(event) => handleReload(event)}>
                    <option value="RELOAD"></option>
                </button>
            </div>

            <div>
                <select className={style.filterbutton} onChange={(event) => handleAscDesc(event)}>
                    <option value="ORDER">ORDER</option>
                    <option value="asc">A-Z</option>
                    <option value="desc">Z-A</option>
                </select>
            </div>
           
            <div>
                <select className={style.filterbutton} onChange={(event) => handleTipStrong(event)}>
                    <option value="ATTACK">ATTACK</option>
                    <option value="max">MAX</option>
                    <option value="min">MIN</option>
                </select>
            </div>

            <div>
                <select className={style.filterbutton} onChange={(event) => handleAllApiBd(event)}>
                    <option value="APICREATE">API OR CREATED</option>
                    <option value="all">ALL</option>
                    <option value="api">API</option>
                    <option value="db">BD</option>
                </select>
            </div>

            <div>
                <select className={style.filterbutton} onChange={(event) => handleTypes(event)}>
                    <option value="types">TYPES</option>
                    {
                            types?.map( t => {
                                return <option value={t.name} key={t.id}>{t.name}</option>
                            })
                    }
                </select>
            </div>

        </div>

        
      <div className={style.cards}>
        
          {Object.entries(pokemonsFiltered).length > 0 && (
              // Mostrar los resultados filtrados si hay alguno
              <Card
                  key={pokemonsFiltered.id}
                  id={pokemonsFiltered.id}
                  name={pokemonsFiltered.name}
                  image={pokemonsFiltered.image}
                  life={pokemonsFiltered.life}
                  stroke={pokemonsFiltered.stroke}
                  defending={pokemonsFiltered.defending}
                  speed={pokemonsFiltered.speed}
                  height={pokemonsFiltered.height}
                  weight={pokemonsFiltered.weight}
                  types={pokemonsFiltered.types}
              />
          )}

          {!Object.entries(pokemonsFiltered).length && currentPokemons.map(p => (
                  <Card
                      key={p.id}
                      id={p.id}
                      name={p.name}
                      image={p.image}
                      life={p.life}
                      stroke={p.stroke}
                      defending={p.defending}
                      speed={p.speed}
                      height={p.height}
                      weight={p.weight}
                      types={p.types}
                  />
              ))
          }
      </div>

      <Paginate className={style.paginate}
          pokemonsPage={pokemonsPerPage}
          totalPages={Math.ceil(allPokemons.length / pokemonsPerPage)}
          paginado={paginado} 
          allPokemons={allPokemons.length}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          />

  </div>
  );
}
