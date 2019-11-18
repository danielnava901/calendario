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
    <div >
      <Portada />
      <PortadaEnero />
      <Enero />
      <PortadaFebrero/>
      <Febrero/>
      <PortadaMarzo/>
      <Marzo/>
    </div>
  );
}

export default App;
