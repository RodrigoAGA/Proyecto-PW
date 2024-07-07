import React, { useEffect, useState } from 'react';
import Pie from './Pie';
import Cabecera from './Cabecera';
import './Parte1.css';

function Detalle() {
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const tituloProducto = urlParams.get('titulo');
        const fabricanteProducto = urlParams.get('fabricante');
        const imagenSrc = urlParams.get('imagenSrc');
        const precioProducto = urlParams.get('precio');
        const descripcionProducto = urlParams.get('description');
        const caracteristicasProducto = urlParams.get('features') ? urlParams.get('features').split(', ') : [];

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

        const descripcionElement = document.getElementById('descripcionProducto');
        if (descripcionProducto) {
            descripcionElement.textContent = descripcionProducto;
        }

        const caracteristicasElement = document.getElementById('caracteristicasProducto');
        caracteristicasElement.innerHTML = '';
        caracteristicasProducto.forEach(caracteristica => {
            const li = document.createElement('li');
            li.textContent = caracteristica;
            caracteristicasElement.appendChild(li);
        });
    }, []);

    const añadirAlCarrito = () => {
        const urlParams = new URLSearchParams(window.location.search);
        const tituloProducto = urlParams.get('titulo');
        const fabricanteProducto = urlParams.get('fabricante');
        const imagenSrc = urlParams.get('imagenSrc');
        const precioProducto = parseFloat(urlParams.get('precio'));

        if (tituloProducto && fabricanteProducto && precioProducto) {
            const nuevoProducto = {
                id: new Date().getTime(), // Crear un ID único
                nombre: tituloProducto,
                precio: precioProducto,
                cantidad: cantidad,
                imagen: imagenSrc
            };

            const carritoActual = JSON.parse(localStorage.getItem('productosCarrito')) || [];
            carritoActual.push(nuevoProducto);
            localStorage.setItem('productosCarrito', JSON.stringify(carritoActual));
            
            // Redirigir a la página del carrito
            window.location.href = './carrito';
        }
    };

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const disminuirCantidad = () => {
        setCantidad(cantidad > 1 ? cantidad - 1 : 1);
    };

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
                        <button onClick={añadirAlCarrito}>AÑADIR AL CARRITO</button>
                        <p className="cantideta">Cantidad:</p>
                        <div className="cantidad-control">
                            <span className="osas" onClick={disminuirCantidad}>-</span>
                            <span className="uno">{cantidad}</span>
                            <span className="osas" onClick={aumentarCantidad}>+</span>
                        </div>
                        <a href="">Ver métodos de envío disponibles</a>
                    </div>
                </div>
            </div>
            <div className="destex">
                <p className="textodes">Descripción</p>
                <p id="descripcionProducto" className="texto">
                    {/* Este contenido se llenará dinámicamente */}
                </p>
            </div>
            <div className="lista">
                <p>Características del Producto:</p>
                <ul id="caracteristicasProducto">
                    {/* Este contenido se llenará dinámicamente */}
                </ul>
            </div>
            <Pie />
        </>
    );
}

export default Detalle;
