import React from 'react';
import compra from '../assets/shopping-cart.svg';
import './Parte1.css'

function Cabecera() {
  return (
    <div className="busqueda"> 
      <div className="topnav"> 
        <a className="active" href="./">Tienda</a>
        <a href="#MasVendidos">Mas vendidos</a>
        <a href="#Nuevos">Nuevos</a>
        <a href="#Ofertas">Ofertas</a>
      </div>
      <div className="cuenta"> 
<<<<<<< HEAD
        <button className="imagen" >
          <img src={compra} alt=""/>
=======
        <button className="imagen">
          <img src={compra} alt=""/>
          <a  className="active" href="./Carrito"></a>
>>>>>>> 2f47f28948a6dadf3e26f1df49ca29f1b7aa2786
        </button>
        <a href="#Ayuda">Ayuda</a>
        <button className="perfil">
          <a className="active" href="./Formulario"> Mi Cuenta</a>
          </button> 
      </div>
    </div>
  );
}

export default Cabecera;
