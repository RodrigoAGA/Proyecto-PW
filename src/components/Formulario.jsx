import React, { useState } from 'react';
import Pie from './Pie';
import Cabecera from './Cabecera';
import './Parte1.css';
import { registro, iniciarSesion, recuperar } from '../../Funciones.js';

const Formulario = () => {
    const [state, setState] = useState({
        contenedor_login_registro: "10px",
        formulario_login: true,
        formulario_registro: false,
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
                        <button id="btn-iniciar-sesion">Iniciar Sesión</button>
                        <button id="btn-Recuperar-contraseña">¿Olvido su contraseña?</button>
                    </div>

                    <div className="caja-trasera-registro">
                        <h3>¿Aún no tiene cuenta?</h3>
                        <p>Registrese para ingresar.</p>
                        <button id="btn-registrarse">Registrarse</button>
                    </div>
                </div>

                {/* Formularios */}
                <div className="contenedor-login-registro">
                    <form action="" id="formulariologin" className="formulario-login">
                        <h2>Ingreso para clientes registrados</h2>
                        <input type="email" placeholder="correo electronico." />
                        <input type="password" placeholder="Contraseña." />
                        <button type="submit" id="enviar">enviar</button>
                        <button type="reset" id="cancelar">cancelar</button>
                        <button id="btn-Recuperar-contraseña">¿Olvido su contraseña?</button>
                    </form>

                    <form action="" id="formularioRecuperar" className="formulario-recuperar-contraseña">
                        <h2>Recuperar contraseña</h2>
                        <input type="email" placeholder="Correo electronico" required />
                        <label>
                            <input name="check" type="checkbox" required /> ¿eres un humano?
                        </label>
                        <button type="submit" id="enviar">enviar</button>
                        <button type="reset" id="cancelar">cancelar</button>
                    </form>

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

export default Formulario;
