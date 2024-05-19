import React from 'react';
import './styles/1ListSeriesAdmin.css';
import './styles/2AgreSerieAdmin.css';
import './styles/4DatRegUsuRegistr.css';

function CambiarContrasena() {
    return (
        <div>
            <div id="cabecera"><h2>TIENDA</h2></div>
            <div id="lateral">
                <div id="title">Mi Cuenta</div>
                <div id="otros">
                    <ul>
                        <li>Órdenes Recientes</li>
                        <li><a href="./4Datos_De_Registro_Usuario_Registrado.html">Datos de Registro</a></li>
                        <li>Cambiar Password</li>
                    </ul>
                </div>
            </div>
            <div id="series">Cambiar Password</div>
            <input type="text" id="dato1" placeholder="Actual" required />
            <input type="text" id="dato2" placeholder="Nuevo" required />
            <input type="email" id="dato3" placeholder="Repetir" required />
            <button id="actualizar">Actualizar</button>
        </div>
    );
}

export default CambiarContrasena;
