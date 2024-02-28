import { GET_ALL_POKEMONS, GET_POKEMONS_ID, 
  GET_NAME_POKEMONS, GET_TYPES, 
  ORDER_BY_ABC, POST_POKEMON, 
  ORDER_BY_STROKE, FILTER_API_DB, 
  FILTER_BY_TYPE, RELOAD } from "../Actions/actions-types";

const initialState = {
  allPokemons: [], //Todos los pokemons
  allPokemonsDefault: [], //Todos los pokemons para filtrar db y api
  pokemonDetail: {}, // Detalle
  pokemonsFiltered: {}, // Añadir un array para los pokemons filtrados
  apiFilteredPokemons: [], // filtros de tipos de pokemons -----
  types:[], // me guarda los tipos
  filtPokemons: [] //para los filtros de pokemons
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action; 
  switch(type) {  //TODOS
    case GET_ALL_POKEMONS: {
        return {
          ...state,//to lo que ya esta
          allPokemons: payload,
          filtPokemons: payload, //agregue por el de abc
          allPokemonsDefault:payload
        };
     }
     case GET_POKEMONS_ID: { //DETAIL
        return {
          ...state,
          pokemonDetail: payload,
        }
     }
     case GET_NAME_POKEMONS:
            if (payload.error) {
                return {
                  ...state,
                  pokemonsFiltered: {}, 
                };
            } else {
                  console.log("aqui estoy", payload)
                return {
                  ...state,
                  pokemonsFiltered: payload,
                }
      }
      case GET_TYPES: { //Obtiene y guarda los tipos
        return {
          ...state,
          types: payload,
        };
      }
      case POST_POKEMON: {
        console.log("aca esta el reducer")
        return {
          ...state,
          apiFilteredPokemons: [...state.apiFilteredPokemons, payload], 
      };
      }
    ////////////////////////////////FILTROS
     case ORDER_BY_ABC: {//all, asc, des 
     let orderPokemons = [...state.allPokemons]; // Usar una copia para no mutar el estado directamente
     console.log(orderPokemons)
       orderPokemons.sort((a, b) => {
         const nameA = a.name.toUpperCase();
         const nameB = b.name.toUpperCase();
         if(action.payload === "asc") {
            return nameA > nameB ? 1 : nameA < nameB ? -1 : 0; //si es menor devolver 1, sino -1 y si son iguales 0
         }else if(action.payload === "desc"){
            return nameA < nameB ? 1 : nameA > nameB ? -1 : 0;
         } else {
          return 0;
         }
        });
       return {
          ...state,
          allPokemons: orderPokemons,
      };
     }
     case ORDER_BY_STROKE: { //ORDEN POR FUERZA
      
      const pokemonStrength = action.payload === "min" ?  [...state.allPokemons].sort((a, b) => a.stroke - b.stroke)
                              :action.payload === "max" ? [...state.allPokemons].sort((a, b) => b.stroke - a.stroke)
                              :state.allPokemonsDefault//trabajo con el mismo
      return {
          ...state,
          allPokemons: pokemonStrength,
      };
      }
      case FILTER_API_DB: { //pokes, tanto de la api como db
        const apiFilteredPokemons = state.allPokemonsDefault.filter(pokemon => !isNaN(pokemon.id));
        // Filtra los pokems creados localmente, que tienen un id diferente que no es numero
        const createdFilteredPokemons = state.allPokemonsDefault.filter(pokemon => isNaN(pokemon.id));
        let filteredPokemons = [];
     
        if (action.payload === 'all') {
          filteredPokemons =state.allPokemonsDefault;
        } else if (action.payload === 'api') {
          filteredPokemons = apiFilteredPokemons;
        } else if (action.payload === 'db') {
          filteredPokemons = createdFilteredPokemons
        }
        console.log(filteredPokemons);
        return {
            ...state,
            allPokemons: filteredPokemons,
        };
      }
      case FILTER_BY_TYPE: {
          const resultados = state.allPokemonsDefault.filter(pokemon=>pokemon.types && pokemon.types.map(t=>t.name).includes(action.payload))
       
          return {
          ...state,
          allPokemons: resultados //siempre el que se va a ver es allPokemons
        }
      }
      case RELOAD: { 
        return {
          ...state,
          allPokemons: state.allPokemonsDefault,
        }
      }
      default:
          return state;
  }
}

