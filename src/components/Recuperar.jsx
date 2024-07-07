import React, { useState } from 'react';
import Pie from './Pie';
import Cabecera from './Cabecera';
import './Parte1.css';

const Recuperar = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/forgot-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      console.log("Revise su correo para recuperar su contraseña."); 
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <Cabecera />
      <div className="contenedor-todo">
        <div className="caja-trasera">
          <div className="caja-trasera-login">
            <h3>¿Ya tiene una       ,</h3>
            <p>Iniciar sesión para ingresa  ,</p>
            <a href="./Formulario">Iniciar Sesión</a>
            <br />
            <a href="./Recuperar">¿Olvido su contraseña?</a>
          </div>
          <div className="caja-trasera-registro">
            <h3>¿Aún no tiene cuenta?</h3>
            <p>Regístrese para ingresar.</p>
            <a href="./Registro">Registro</a>
            <h3>¿Desea iniciar Sesión?</h3>
            <a href="./Formulario">Haga click aquí.</a>
          </div>
        </div>

        <div className="contenedor-login-registro">
          <form onSubmit={handleSubmit} className="formulario-login">
            <h2>Recupere su contraseña</h2>
            <input
              type="email"
              placeholder="Correo electrónico"
              value={email}
              onChange={handleChange}
              required
            />
            <button type="submit" id="enviar">Enviar</button>
            <button type="reset" id="cancelar">Cancelar</button>
            <a href="./">

            </a>
          </form>

          <form action="" id="formularioregistro" className="formulario-registro">
            <h2>Registrarse</h2>
            <input type="text" placeholder="Nombre completo:" required />
            <input type="email" placeholder="Correo electrónico" required />
            <input type="text" placeholder="Usuario" required />
            <input type="password" placeholder="Contraseña" required />

            <button type="submit" id="enviar">Enviar</button>
            <button type="reset" id="cancelar">Cancelar</button>

          </form>
        </div>
      </div>
      <Pie />
    </>
  );
};

export default Recuperar;
