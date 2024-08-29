import React from 'react';
import { useParams } from 'react-router-dom';
import bebidas from './datosBebidas';

function DetalleProducto() {
    const { codigo } = useParams();
    const bebida = bebidas.find(b => b.codigo === codigo);

    if (!bebida) return <p>Producto no encontrado.</p>;

    return (
        <section className="section">
            <h2>{bebida.nombre}</h2>
            <p>Descripción: {bebida.descripcion}</p>
            <p>Valor: ${bebida.precio}</p>
            <p>Stock: {bebida.stock}</p>
            <p>Código de producto: {bebida.codigo}</p>
            <button onClick={() => window.history.back()} className="button">Volver</button>
        </section>
    );
}

export default DetalleProducto;