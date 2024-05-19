import React from 'react';
import compra from '../assets/shopping-cart.svg';
import './Parte1.css'

function Cabecera() {
  return (
    <div className="busqueda"> 
      <div className="topnav"> 
        <a className="active" href="./Inicio.jsx">Tienda</a>
        <a href="#MasVendidos">Mas vendidos</a>
        <a href="#Nuevos">Nuevos</a>
        <a href="#Ofertas">Ofertas</a>
      </div>
      <div className="cuenta"> 
        <button className="imagen">
          <img src={compra} alt="" />
        </button>
        <a href="#Ayuda">Ayuda</a>
        <button className="perfil">Mi Cuenta</button> 
      </div>
    </div>
  );
}

export default Cabecera;
