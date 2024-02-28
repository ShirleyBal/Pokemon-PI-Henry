import { Link } from "react-router-dom";
import style from "./landingpage.module.css";

export default function LandingPage () { 
  return (
      <div className={style.conteinerLandingPage}>
        <h1>Welcome!</h1>
         <Link to="/home">
           <button>Explore</button>
         </Link>
    </div>
  );
}

