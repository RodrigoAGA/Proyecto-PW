import React, { useState } from 'react';
import Pie from './Pie';
import Cabecera from './Cabecera';
import './Parte1.css';

const Formulario = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("bienvenido"); 
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
            <h3>¿Ya tiene una c     </h3>
            <p>Iniciar sesión para ingresa  </p>
            <button id="btn-iniciar-sesion" >Iniciar Sesión</button>
            <a href="./Recuperar">¿</a>
          </div>
          <div className="caja-trasera-registro">
            <h3>¿Aún no tiene cuenta?</h3>
            <p>Registrese para ingresar.</p>
            <a href="./Registro">Registro</a>
            <br />
            <a href="./Recuperar">¿Olvido su contraseña?</a>
          </div>
        </div>

        <div className="contenedor-login-registro">
          <form onSubmit={handleSubmit} className="formulario-login">
            <h2>¡Bienvenido!</h2>
            <h2>Ingrese sus datos para iniciar sesión</h2>
            <input 
              type="email" 
              name="email" 
              placeholder="correo electronico" 
              value={formData.email} 
              onChange={handleChange} 
              required 
            />
            <input 
              type="password" 
              name="password" 
              placeholder="contraseña" 
              value={formData.password} 
              onChange={handleChange} 
              required 
            />
            <button type="submit" id="enviar">Enviar</button>
            <button type="reset" id="cancelar">Cancelar</button>
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
      </div>
      <Pie />
    </>
  );
};

export default Formulario;
