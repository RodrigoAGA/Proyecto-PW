import React, { useEffect } from 'react';
import Pie from './Pie';
import Cabecera from './Cabecera';
import './Parte1.css';

function Busqueda() {
    useEffect(() => {
        const productosData = [
            { 
                id: 1,
                imagenSrc: 'ruta/de/imagen1.jpg', 
                titulo: 'Voltron Mini Action Voltron Vehicle Force Figure (Standard)',
                fabricante: 'Bandai',
            },
            { 
                id: 2,
                imagenSrc: 'ruta/de/imagen2.jpg', 
                titulo: 'Saint Seiya HQS Plus Athena Limited Edition Statue',
                fabricante: 'Bandai - Serie: Saint Seiya HQS',
            },
            { 
                id: 3,
                imagenSrc: 'ruta/de/imagen3.jpg', 
                titulo: 'Saint Seiya Premium Masterline Dragon Shiryu Final Bronze Cloth 1/4 Scale Statue',
                fabricante: 'Prime 1 Studio - Serie: Knights of The Zodiac',
            },
            { 
                id: 4,
                imagenSrc: 'ruta/de/imagen4.jpg', 
                titulo: 'Voltron Mini Action Voltron Vehicle Force Figure (Standard)',
                fabricante: 'Por: Bandai',
            },
            { 
                id: 5,
                imagenSrc: 'ruta/de/imagen5.jpg', 
                titulo: 'Voltron Mini Action Voltron Vehicle Force Figure (Standard)',
                fabricante: 'Por: Bandai',
            },
            { 
                id: 6,
                imagenSrc: 'ruta/de/imagen6.jpg', 
                titulo: 'Saint Seiya HQS Plus Athena Limited Edition Statue',
                fabricante: 'Bandai - Serie: Saint Seiya HQS',
            },
        ];

        const productosContainer = document.getElementById('productos');
        const paginacionContainer = document.getElementById('paginacion');

        const generarProductos = () => {
            productosData.forEach((producto) => {
                const containerDiv = document.createElement('div');
                containerDiv.classList.add('productos-container2');

                const imagenElement = document.createElement('img');
                imagenElement.src = producto.imagenSrc;
                imagenElement.alt = '';
                containerDiv.appendChild(imagenElement);

                const productoDetalleDiv = document.createElement('div');
                productoDetalleDiv.classList.add('producto-detalle');
                const tituloP = document.createElement('p');
                tituloP.classList.add('producto-titulo');
                tituloP.textContent = producto.titulo;
                const fabricanteP = document.createElement('p');
                fabricanteP.classList.add('producto-fabri');
                fabricanteP.textContent = `Por: ${producto.fabricante}`;
                const precioP = document.createElement('p');
                precioP.classList.add('producto-precio');
                const precioAleatorio = (Math.random() * (5000 - 100) + 100).toFixed(2);
                precioP.textContent = `S/ ${precioAleatorio}`;
                productoDetalleDiv.appendChild(tituloP);
                productoDetalleDiv.appendChild(fabricanteP);
                productoDetalleDiv.appendChild(precioP);

                containerDiv.appendChild(productoDetalleDiv);

                containerDiv.addEventListener('click', () => {
                    const url = `./DetalleProducto.html?id=${producto.id}&titulo=${encodeURIComponent(producto.titulo)}&fabricante=${encodeURIComponent(producto.fabricante)}&imagenSrc=${encodeURIComponent(producto.imagenSrc)}&precio=${encodeURIComponent(precioAleatorio)}`;
                    window.location.href = url;
                });

                productosContainer.appendChild(containerDiv);
            });
        };

        const cambiarPagina = (nuevaPagina) => {
            window.location.href = `?pagina=${nuevaPagina}`;
        };

        if (paginacionContainer) {
            const anterior = paginacionContainer.querySelector('.anterior');
            const siguiente = paginacionContainer.querySelector('.siguiente');
            const paginas = paginacionContainer.querySelectorAll('.pagina a');

            const urlParams = new URLSearchParams(window.location.search);
            let paginaActual = parseInt(urlParams.get('pagina')) || 1;

            if (anterior) {
                anterior.addEventListener('click', () => {
                    if (paginaActual > 1) {
                        cambiarPagina(paginaActual - 1);
                    }
                });
            }

            if (siguiente) {
                siguiente.addEventListener('click', () => {
                    cambiarPagina(paginaActual + 1);
                });
            }

            paginas.forEach(pagina => {
                pagina.addEventListener('click', (event) => {
                    event.preventDefault();
                    const nuevaPagina = parseInt(event.target.textContent);
                    cambiarPagina(nuevaPagina);
                });
            });
        }

        generarProductos();
    }, []);

    return (
        <>
            <Cabecera />
            <div>
                <div className="ordenar-container">
                    <div className="ordenar">
                        <span>Ordenar Por: </span>
                        <select name="Precio">
                            <option>Precio</option>
                            <option>Nombre</option>
                            <option>Opcion C</option>
                        </select>
                    </div>
                </div>
                <div className="resultados">
                    <div className="tituresul">
                        <span>Resultados de Busqueda</span>
                    </div>
                    <div id="productos"></div>
                </div>
                <div id="paginacion" className="paginacion">
                    <ul className="navega">
                        <li className="anterior">« Anterior</li>
                        <li className="pagina"><a href="#">1</a></li>
                        <li className="pagina"><a href="#">2</a></li>
                        <li className="pagina"><a href="#">3</a></li>
                        <li className="pagina"><a href="#">4</a></li>
                        <li className="puntos">...</li>
                        <li className="pagina"><a href="#">11</a></li>
                        <li className="siguiente">Siguiente »</li>
                    </ul>
                </div>
            </div>
            <Pie />
        </>
    );
}

export default Busqueda;
