import React, { useState } from 'react';
import Pie from './Pie';
import Cabecera from './Cabecera';
import './Parte1.css';


const Registro = () => {
    const [state, setState] = useState({
        contenedor_login_registro: "10px",
        formulario_login: false,
        formulario_registro: true,
        caja_trasera_login: "0",
        caja_trasera_registro: "1",
        formulario_recuperar_contraseña: false,
    });

    return (
        <><><Cabecera></Cabecera>
            <div className="contenedor-todo">
                {/* Cajas */}
                <div className="caja-trasera">
                    <div className="caja-trasera-login">
                        <h3>¿Ya tiene una cuenta?</h3>
                        <p>Iniciar sesión para ingresar.</p>
                       <a href="./Formulario"> Iniciar Sesión</a>
                       <br/>
                        <a href="/Recuperar">¿Olvido su contraseña?</a>
                    </div>
                    <div className="caja-trasera-registro">
                        <h3>¿Aún no tiene cuenta?</h3>
                        <p>Registrese para ingresar.</p>
                       <a href="./Registro">Registro</a>
                    </div>
                </div>

                {/* Formularios */}
                <div className="contenedor-login-registro">
                    <form action="" id="formularioregistro" className="formulario-registro">
                        <h2>Registrarse</h2>
                        <input type="text" placeholder="Nombre completo:" required />
                        <input type="email" placeholder="Correo electronico" required />
                        <input type="text" placeholder="Usuario" required />
                        <input type="password" placeholder="Constraseña" required />
                        <button type="submit" id="enviar">enviar</button>
                        <button type="reset" id="cancelar">cancelar</button>
                    </form>
                </div>
            </div></><Pie /></>
    );
};
export default Registro;