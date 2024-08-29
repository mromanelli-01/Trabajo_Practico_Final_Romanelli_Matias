import React from 'react';
import bebidas from './datosBebidas';
import Bebida from './Bebidas';

function ListaBebidas() {
    return (
        <div>
            {bebidas.map((bebida) => (
                <Bebida
                    key={bebida.codigo}
                    nombre={bebida.nombre}
                    precio={bebida.precio}
                    stock={bebida.stock}
                    codigo={bebida.codigo}
                    descripcion={bebida.descripcion}
                />
            ))}
        </div>
    );
}

export default ListaBebidas;
