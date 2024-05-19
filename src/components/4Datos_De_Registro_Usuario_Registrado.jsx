import React from 'react';
import './styles/1ListSeriesAdmin.css';
import './styles/2AgreSerieAdmin.css';
import './styles/4DatRegUsuRegistr.css';

function DatosDeRegistroUsuario() {
    return (
        <div>
            <div id="cabecera"><h2>TIENDA</h2></div>
            <div id="lateral">
                <div id="title">Mi Cuenta</div>
                <div id="otros">
                    <ul>
                        <li>Órdenes Recientes</li>
                        <li>Datos de Registro</li>
                        <li><a href="./5Cambiar_Contraseña.html">Cambiar Password</a></li>
                    </ul>
                </div>
            </div>
            <div id="series">Datos de Registro</div>
            <input type="text" id="dato1" placeholder="Nombre" required />
            <input type="text" id="dato2" placeholder="Apellido" required />
            <input type="email" id="dato3" placeholder="Correo" required />
            <button id="actualizar">Actualizar</button>
            <script src="./jsc/jsc.js"></script>
        </div>
    );
}

export default DatosDeRegistroUsuario;
