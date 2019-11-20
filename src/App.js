import React from 'react';
import Portada from "./components/container/Portada";
import PortadaMes from "./components/container/PortadaMes";
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
          <PortadaMes name="Abril" primaryColor="#E04855" secondaryColor="#E9B7C3"/>
          <PortadaMes name="Mayo"/>
          <PortadaMes name="Junio" primaryColor="#E04855" secondaryColor="#E9B7C3" />
        </section>
        <section className="col col-sm-3 section-tertiary">
          ADASDDSADASD
        </section>
      </div>
    </div>
  );
}

export default App;
