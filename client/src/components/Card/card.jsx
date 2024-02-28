import { Link } from "react-router-dom";
import style from "./card.module.css";

export default function Card({ id, image, name, types }) {
  // console.log("Entrando al card");
  return (
    <div className={style.cardcontainer}>
      <div className={style.card}>
        <h2>{id}</h2>
        <h2 className={style.title}>{name}</h2>
        <Link to={`pokemons/${id}`}>
          {image && (
            <img
              className={style.pokemonImg}
              src={image}
              alt="PokeImage not found"
              width="175px"
              height="160px"
            />
          )}
        </Link>
        <h5>Types: {types?.map(pt => pt.name)}</h5>
        <br />
      </div>
    </div>
  );
}
