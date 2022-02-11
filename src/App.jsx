import "./App.scss";
import Img from "react-cool-img";

import logo from "./assets/logo-huge.png";

const App = () => {
  return (
    <div className="App">
      <section className="hero spaced">
        <div className="logo">
          <Img src={logo} alt="Logo Filateliapp" width="28" height="31" />
          <p>FILATELIAPP</p>
        </div>
        <div className="hero-text">
          <h1 className="text-primary">
            Recuperando la filatelia por internet
          </h1>
          <p>
            Quizás las cartas hayan quedado en el pasado, pero nuestras
            estampillas merecen ser recordadas.
          </p>
        </div>
      </section>
    </div>
  );
};

export default App;
