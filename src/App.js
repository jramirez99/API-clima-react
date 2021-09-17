import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ResultadoClima from './components/ResultadoClima';
import Error from './components/Error';


import './index.css';

function App() {

  const [busqueda, guardarBusqueda] = useState({
    ciudad: '',
    pais: ''
  });

  const [consultar, guardarConsultar] = useState(false);
  const [datosApi, setDatosApi] =  useState({});
  const [error, setError] = useState(false);

  // destructuracion
  const { ciudad, pais } = busqueda;

  useEffect( () => {
    const consultarApi = async () => {

      if (consultar) {
        const apiKey = 'b174b5a66ea736751ba91236969c5257';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${apiKey}`

        const resultado = await fetch(url);
        const datos = await resultado.json();

        setDatosApi(datos);

        guardarConsultar(false);

        // si hay un error, que no existe la ciudad 
        if (datos.cod === "404") {
          setError(true);
        } else {
          setError(false);
        };
      };
    };
    consultarApi();

  }, [consultar] );


  let componente;
  // Carga condicional de componente
  if (error) {
    componente = <Error 
                    mensaje="No hay resultados" 
                  />
  } else {
    componente = <ResultadoClima 
                    datosApi={datosApi}
                />
  };

  return (
    <Fragment>

      <Header
        titulo="Clima React"
      />

      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">

              <Formulario 
                busqueda={ busqueda }
                guardarBusqueda={ guardarBusqueda }
                guardarConsultar={ guardarConsultar }
              />

            </div>

            <div className="col m6 s12">

              { componente }

            </div>

          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default App;
