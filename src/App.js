import React from 'react';
import Portada from "./components/container/Portada";
import PortadaMes from "./components/container/PortadaMes";
import Mes from "./components/container/Mes";

const year = {
  enero: {
    days: 31,
    start: 3,
    daysLastMonth: 30,
    activities: []
  },
  febrero: {
    days: 28,
    start: 6,
    daysLastMonth: 31,
    activities: []
  },
  marzo: {
    days: 31,
    daysLastMonth: 28,
    start: 0,
    activities: []
  },
  abril: {
    days: 30,
    daysLastMonth: 31,
    start: 3,
    activities: {
      1: [{
        name: "ejercicio"
      },{
        name: "ir a pagar"
      }],
      7: [{
        name: "cumple"
      }],
      10: [{
        name: "Escuela", fecha: ""
      }]
    }
  },
  mayo: {
    days: 31,
    daysLastMonth: 30,
    start: 5,
    activities: {
      1: [{
        name: "ejer may"
      },{
        name: "pelear"
      }],
      7: [{
        name: "carrera"
      }],
      10: [{
        name: "escuela", fecha: ""
      }]
    }
  },
};

function App() {
  return (
    <div className="container">
      <div className="row">
        <section className="col col-sm-9 section-primary">
          <Portada />
          <PortadaMes name="Enero" primaryColor="rgb(58,143,122)" secondaryColor="rgb(129,192,204)"/>
          <Mes name="Enero"
               days={year.enero.days}
               start={year.enero.start}
               daysLastMonth={year.enero.daysLastMonth}/>
          <PortadaMes name="Febrero" primaryColor="rgb(211,46,103)" secondaryColor="rgb(226,137,156)"/>
          <Mes name="Febrero"
               days={year.febrero.days}
               start={year.febrero.start}
               daysLastMonth={year.febrero.daysLastMonth}/>
          <PortadaMes name="Marzo" primaryColor="rgb(153,206,176)" secondaryColor="rgb(216,237,225)"/>
          <Mes name="Marzo"
               days={year.marzo.days}
               start={year.marzo.start}
               daysLastMonth={year.marzo.daysLastMonth}/>
          <PortadaMes name="Abril" primaryColor="#E04855" secondaryColor="#E9B7C3"/>
          <Mes name="Abril"
               days={year.abril.days}
               start={year.abril.start}
               daysLastMonth={year.abril.daysLastMonth}
               activities={year.abril.activities}
               primaryColor="#E04855" secondaryColor="#E9B7C3"
               />
          <PortadaMes name="Mayo"/>
          <Mes name="Mayo"
               days={year.mayo.days}
               start={year.mayo.start}
               daysLastMonth={year.mayo.daysLastMonth}
               activities={year.mayo.activities}
               />
          <PortadaMes name="Junio" primaryColor="#E04855" secondaryColor="#E9B7C3" />
        </section>
        <section className="col col-sm-3 section-tertiary">
          SIDEBAR
        </section>
      </div>
    </div>
  );
}

export default App;
