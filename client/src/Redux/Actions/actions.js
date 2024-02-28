/// hacer funciones que se conecten con el back, instalar axios
//las action despues las pasamos en el reducer para los cases
import axios from "axios";

//Todos
export function getpokemons() {
  // console.log("en actions , get pokemons");
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/pokemons/all");
      // console.log(response.data, "response en action");
      return dispatch({
        type: "GET_ALL_POKEMONS",
        payload: response.data,
      });
    } catch (error) {
      console.log(error)
    }
  };
}

// Con fetch
// export const getpokemon = () => {
//     return (dispatch) {
//         fetch('http://localhost:3001/pokemons/all')
//         .then((response) => response.json())
//         .then((data) => {
//             return dispatch({type: GET_ALL_POKEMON, payload: data})
//         })
//         }catch {
//         }
//     }
// }


//Detail 
export function getPokemosxId(id) {
  return async function (dispatch) {
    // console.log(id)
    try {
      const response = await axios.get(
        `http://localhost:3001/pokemons/${id}`);
        // console.log(response.data)
      return dispatch({
        type: "GET_POKEMONS_ID",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

//Tipos se enfoca en realizar una solicitud de filtrado por tipos y devuelve los resultados filtrados.
export function getAllPokemonsTypes() {
  return async function (dispatch) {
    try {
      // Realizar la lógica de filtrado aquí, puedes ajustar la URL según tu backend
      const response = await axios.get(   "http://localhost:3001/types");
      // Enviar la acción Redux con el tipo y la carga útil filtrada
      return dispatch({
        // type: "FILTER_BY_TYPES",
        type: "GET_TYPES",
        payload: response.data,
      });
    } catch (error) {
      console.error("Error while getting Pokémon by types:", error);
    }
  };
}

//Que el pokemon sea creado, recibimos la info del form
export function postPoke(payload) {
  return async function (dispatch) {
    try {
      const response = await axios.post("http://localhost:3001/pokemons", payload);
       // Enviar la acción Redux con el tipo y la carga útil de la respuesta del servidor
      dispatch ({
        type: "POST_POKEMON",
        payload: response.data,
      });
      console.log(response.data,"todo okey")
      return response.data; // Puedes retornar la respuesta para manejarla en el componente si es necesario
    } catch (error) {
      console.error("Error al crear Pokémon:", error);
      throw error; // Re-lanza el error para que el componente pueda manejarlo si es necesario
    }
  };
}

//NOMBRE(SEARCHBAR)      
export function getNamePokemons (name) {
  // console.log("getNamePokemons action. Searching for:", name);
  return async function (dispatch) {
      try {
          const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`);
          console.log("Search result:", response.data);
          return dispatch({
              type: "GET_NAME_POKEMONS",
              payload: response.data
          })
      } catch (error) {
          return dispatch({
              type: "GET_NAME_POKEMONS",
              payload: { error: error },
          });
      }
  }
}

/////////////////Recargar:
export function reload(payload) {
  return {
    type: "RELOAD",
    payload,
  };
}

////////////////Filters:

export function orderByAbc(payload) {
  return {
    type: "ORDER_BY_ABC",
    payload,
  };
}

export function orderByStroke(payload) {
  return {
    type: "ORDER_BY_STROKE",
    payload,
  };
}

export function filterByType (payload) {
  console.log(payload)
  return {
      type: "FILTER_BY_TYPE",
      payload
  }
}

export function filterApiorDB(payload) {
  return {
    type: "FILTER_API_DB",
    payload,
  };
}

