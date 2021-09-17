import React from 'react';

const ResultadoClima = ( { datosApi } ) => {

    const { name, main } = datosApi;

    if (!name) return null;

    const graodsKelvin = 273.15;

    return (  
        <div className="card-panel white col s12">
            <div className="black-text">
                <h2> El clima de  { name } es: </h2>

                <p className="temperatura"> 
                    { parseInt( main.temp - graodsKelvin ) } 
                    <span> &#8451; </span> 
                </p>
                <p> Temperatura maxima 
                    { parseInt( main.temp_max - graodsKelvin ) } 
                    <span> &#8451; </span> 
                </p>
                <p> Temperatura minima 
                    { parseInt( main.temp_min - graodsKelvin ) } 
                    <span> &#8451; </span> 
                 </p>
            </div>
        </div>
    );
};

export default ResultadoClima;