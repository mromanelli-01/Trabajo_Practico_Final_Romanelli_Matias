import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Bebida(props) {
    const [verMas, setVerMas] = useState(false);

    return (
        <section className="section">
            <h2>{props.nombre}</h2>
            <p> {props.descripcion}</p>
            {verMas ? (
                <>
                    <p>Descripción: {props.descripcion}</p>
                    <p>Valor: ${props.precio}</p>
                    <p>Stock: {props.stock}</p>
                    <p>Código de producto: {props.codigo}</p>
                    <Link to={`/producto/${props.codigo}`} className="button">Ir a producto</Link>
                </>
            ) : (
                <>
                    <button onClick={() => setVerMas(!verMas)} className="button">Ver detalle</button>
                </>
            )}
        </section>
    );
}

export default Bebida;