import React from 'react';
import Portada from "./components/container/Portada";
import PortadaEnero from "./components/container/PortadaEnero";
import Enero from "./components/container/Enero";
import PortadaFebrero from "./components/container/PortadaFebrero";
import Febrero from "./components/container/Febrero";
import PortadaMarzo from "./components/container/PortadaMarzo";
import Marzo from "./components/container/Marzo";

function App() {
  return (
    <div className="container">
      <div className="row">
        <section className="col col-sm-9 section-primary">
          <Portada />
          <PortadaEnero />
          <Enero />
          <PortadaFebrero/>
          <Febrero/>
          <PortadaMarzo/>
          <Marzo/>
        </section>
        <section className="col col-sm-3 section-tertiary">
          ADASDDSADASD
        </section>
      </div>
    </div>
  );
}

export default App;
