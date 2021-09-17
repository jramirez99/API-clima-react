import { useState } from "react";
import Error from './Error';


const Formulario = ( { busqueda, guardarBusqueda, guardarConsultar } ) => {

    const [error, setError] = useState(false);

    const leerInputs = e => {
        guardarBusqueda({
            ...busqueda, [e.target.name] : e.target.value 
        });
    };

    // destructuracion
    const { ciudad, pais } = busqueda;

    const validarCampos = e => {
        e.preventDefault();

        if ( [ ciudad.trim(), pais.trim() ].includes('') ) {
            setError(true);
            return;
        };

        setError(false);
        guardarConsultar(true)
    };

    return (
        <form
            onSubmit={validarCampos}
        >
            { error 
                ? <Error mensaje="Todos los campos son obligatorios" />
                : null }

            <div className="input-field col s12">
                <input
                    type="text"
                    name="ciudad"
                    id="ciudad"
                    value={ciudad}
                    onChange={leerInputs}
                />

                <label htmlFor="ciudad">Ciudad:</label>
            </div>

            <div className="input-field col s12">
                <select
                    name="pais"
                    id="pais"
                    value={pais}
                    onChange={leerInputs}
                >
                    <option value="">-- Selecione un pais --</option>
                    <option value="US"> Estados Unidos </option>
                    <option value="MX"> México </option>
                    <option value="AR"> Argentina </option>
                    <option value="CO"> Colombia </option>
                    <option value="CR"> Costa Rica </option>
                    <option value="ES"> España </option>
                    <option value="PE"> Perú </option>

                </select>

                <label htmlFor="pais"> Pais: </label>
            </div>

            <div className="input-field col s12">
                <input
                    type="submit"
                    value="Buscar Clima"
                    className="waves-effect waves-light btn-large btn-block yellow accent-4"
                />
            </div>
        </form>
    );
};

export default Formulario;