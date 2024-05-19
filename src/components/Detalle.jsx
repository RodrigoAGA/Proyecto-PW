import React, { useEffect } from 'react';
import Pie from './Pie';
import Cabecera from './Cabecera';
import './Parte1.css';

function Detalle() {
    return (
        <>
            <Cabecera />
            <div className="titulo">
                <p className="titulo-largo">Titulo de Producto: Puede ser bastante largo</p>
                <p className="titulo-largo2">Por: <strong>HASBRO</strong> - Serie: <strong>Avengers Endgame</strong></p>
                <hr className="linea" />
                <div className="detalle-imagen">
                    <div className="imagen-producto">
                        <img src="" alt="" />
                    </div>
                    <div className="detalle-prod">
                        <div className="dispdet">
                            <span>DISPONIBLE</span>
                        </div>
                        <div className="precdet">
                            <p className="preciodeta">s/88.99</p>
                            <button> AÑADIR AL CARRITO</button>
                            <p className="cantideta">Cantidad:</p>
                            <div>
                                <span className="osas">-</span>
                                <span className="uno">1</span>
                                <span className="osas">+</span>
                            </div>
                            <a href="">Ver metodos de envio disponibles</a>
                        </div>
                    </div>
                </div>
                <div className="destex">
                    <p className="textodes">Descripcion</p>
                    <p className="texto">From the Voltron franchise comes a new Mini Action Voltron Vehicle Force figure by Action Toys. This figure is highly articulated 
                        and able to produce various poses from the series, along with being able to seperate various parts to form vehicles. This Voltron 
                        Vehicle Force toy figure is sure to be a great addition to any Voltron collection!
                    </p>
                </div>
                <div className="lista">
                    <p>Caracteristicas del Producto:</p>
                    <ul>
                        <li>Mide 18 centimitros</li>
                        <li>Hecho de PVC</li>
                        <li>De la serie Voltron</li>
                        <li>Articulo</li>
                        <li>15 piezas distintas</li>
                        <li>Combinable con otras figuras</li>
                    </ul>
                </div>
            </div>
            <Pie />
        </>
    );
}

export default Detalle;
