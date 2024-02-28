import Navbar from "../Navbar/navbar";
import style from "./about.module.css"

//areglar luego
export default function About() {
  console.log('about')
  return ( 
     <div className={style.aboutconteiner}>
      <Navbar></Navbar>
        <div className={style.aboutsquare}>
          <h1>About me</h1>
            <p>Visita mi 
              <a href="https://github.com/ShirleyBal"> GitHub</a>
            </p>
        </div>
     </div>
  );
}