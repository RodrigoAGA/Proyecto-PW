import React from 'react';
import './styles/1ListSeriesAdmin.css';
import './styles/2AgreSerieAdmin.css';

function AgregarSerie() {
    return (
        <div>
            <head>
                <meta charSet="utf-8" />
                <title>Agregar Serie</title>
            </head>
            <body>
                <div id="cabecera"><h2>TIENDA</h2></div>
                <div id="lateral">
                    <div id="title">Admin</div>
                    <div id="otros">
                        <ul>
                            <li>Dashboard</li>
                            <li>Usuarios registrados</li>
                            <li>Productos</li>
                            <li>Órdenes</li>
                            <li>Nombre</li>
                            <li>series</li>
                        </ul>
                    </div>
                </div>
                <div id="series">Agregar Serie</div>
                <input type="text" id="cajagrande" required />
                <div id="subtitulo">Nombre</div>
                <input type="text" id="cajanombre" required /><br />
                <div id="subtitulo">Descripción</div>
                <input type="text" id="cajadescrip" required />
                
                <div id="series2">Producto en la Serie <button id="boton2">+</button> </div>
                <nav>
                    <div id="listadodos">
                        <ul>
                            <li id="id">ID</li>
                            <li id="descrip">Descripción</li>
                            <div id="listado_2">
                                <li>acciones</li>
                            </div>
                            <div id="listado2">
                                <li id="id">1</li>
                                <li id="descrip">BEBIDA GASIFICADA</li>
                            </div>
                            <div id="listado2_2">
                                <li id="accion">remover</li>
                            </div>
                        </ul>
                    </div>
                </nav>
                <button id="boton">Agregar imagen</button>
                <button id="guardar">Guardar</button>
            </body>
        </div>
    );
}

export default AgregarSerie;
