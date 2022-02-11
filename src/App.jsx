import "./App.scss";
import Img from "react-cool-img";

import logo from "./assets/logo-huge.png";
import stamps from "./data/stamp-data.json";
import Stamp from "./components/Stamp";

const App = () => {
  return (
    <div className="App">
      <section className="hero">
        <div className="logo">
          <Img src={logo} alt="Logo Filateliapp" width="28" height="31" />
          <p>FILATELIAPP</p>
        </div>
        <div className="hero-text">
          <h1>Recuperando la filatelia por internet</h1>
          <p>
            Quizás las cartas hayan quedado en el pasado, pero nuestras
            estampillas merecen ser recordadas.
          </p>

          <a href="#coleccion" className="btn">
            VER COLECCIÓN
          </a>
        </div>
        <div className="hero-stamp-grid">
          {stamps.map((stamp) => (
            <Stamp
              {...stamp}
              extraStyle={{ transform: `translateX(${stamp.id * -0.8}rem)` }}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default App;
