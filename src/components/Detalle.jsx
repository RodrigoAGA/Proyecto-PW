import React, { useEffect } from 'react';
import Pie from './Pie';
import Cabecera from './Cabecera';
import './Parte1.css';

function Detalle() {
    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tituloProducto = urlParams.get('titulo');
        const fabricanteProducto = urlParams.get('fabricante');
        const imagenSrc = urlParams.get('imagenSrc');
        const precioProducto = urlParams.get('precio');

        if (tituloProducto && fabricanteProducto) {
            const detalleProducto = document.getElementById('detalleProducto');
            detalleProducto.innerHTML = `
                <p class="titulo-largo">${tituloProducto}</p>
                <p class="titulo-largo2">Por: <strong>${fabricanteProducto}</strong></p>
            `;
        }

        const imagenProducto = document.getElementById('imagenProducto');
        if (imagenSrc) {
            imagenProducto.src = imagenSrc;
        }

        const precioElement = document.getElementById('precioProducto');
        if (precioProducto) {
            precioElement.textContent = `S/ ${precioProducto}`;
        }
    }, []);

    return (
        <>
            <Cabecera />
            <div className="titulo" id="detalleProducto">
                {/* Este contenido se llenará dinámicamente */}
            </div>
            <hr className="linea" />
            <div className="detalle-imagen">
                <div className="imagen-producto">
                    <img id="imagenProducto" src="" alt="" />
                </div>
                <div className="detalle-prod">
                    <div className="dispdet">
                        <span>DISPONIBLE</span>
                    </div>
                    <div className="precdet">
                        <p id="precioProducto" className="preciodeta"></p>
                        <button>AÑADIR AL CARRITO</button>
                        <p className="cantideta">Cantidad:</p>
                        <div>
                            <span className="osas">-</span>
                            <span className="uno">1</span>
                            <span className="osas">+</span>
                        </div>
                        <a href="">Ver métodos de envío disponibles</a>
                    </div>
                </div>
            </div>
            <div className="destex">
                <p className="textodes">Descripción</p>
                <p id="descripcionProducto" className="texto">
                    From the Voltron franchise comes a new Mini Action Voltron Vehicle Force figure by Action Toys. This figure is highly articulated 
                    and able to produce various poses from the series, along with being able to separate various parts to form vehicles. This Voltron 
                    Vehicle Force toy figure is sure to be a great addition to any Voltron collection!
                </p>
            </div>
            <div className="lista">
                <p>Características del Producto:</p>
                <ul id="caracteristicasProducto">
                    <li>Mide 18 centímetros</li>
                    <li>Hecho de PVC</li>
                    <li>De la serie Voltron</li>
                    <li>Artículo</li>
                    <li>15 piezas distintas</li>
                    <li>Combinable con otras figuras</li>
                </ul>
            </div>
            <Pie />
        </>
    );
}

export default Detalle;
