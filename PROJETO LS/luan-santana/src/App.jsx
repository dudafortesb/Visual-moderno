import "./App.css";

import img2 from "./assets/img-dud.png";
import img1 from "./assets/img-duda.png";
import { Heart, House, Forward } from "lucide-react";
export default function App() {
  return (
  <>
  <main>
    <header>
    <img src={img1}  />
    </header>
 
      <section>
      <h1>Registro Histórico </h1>
      <p>O Registro Histórico de Luan Santana é a turnê e projeto comemorativo de 18 anos de carreira de Luan Santana, focado na nostalgia e em grandes clássicos de sua trajetória</p>
      <small>Cuiabá 25/4</small>
      <div className="cote"><img src={img2} /></div>
      </section>
      <footer>
        <div className="icons">  <Heart /> </div>
        <div className="icons">  <House />  </div>
        <div className="icons"><Forward /></div>
      </footer>
  </main>
  </>
  );
}