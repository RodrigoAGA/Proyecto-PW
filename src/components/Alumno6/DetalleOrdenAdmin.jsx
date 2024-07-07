import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Alumno6/DetalleOrdenAdmin.css';
import Pie from "../Pie";
import Cabecera from '../Cabecera';
import "../Parte1.css";

function DetalleOrdenAdmin() {
    const { id } = useParams();
    const [orden, setOrden] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const cargarDatosOrden = async () => {
        try {
          const response = await fetch('/data/ordenes.json');
          if (!response.ok) {
            throw new Error('Error al cargar los datos de la orden');
          }
          const data = await response.json();
          const ordenEncontrada = data.find(orden => orden.id === id);
          if (!ordenEncontrada) {
            throw new Error('Orden no encontrada');
          }
          setOrden(ordenEncontrada);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      cargarDatosOrden();
    }, [id]);
  
    if (loading) {
      return <p>Cargando...</p>;
    }
  
    if (error) {
      return <p>Error: {error}</p>;
    }
  
    return (
      <>
        <Cabecera />
        <div className="admin-container">
          <div className="sidebar">
            <h2>Admin</h2>
            <ul>
              <li><a href="/dashboard">Dashboard</a></li>
              <li><a href="/usuarios-registrados">Usuarios registrados</a></li>
              <li><a href="/productos">Productos</a></li>
              <li><a href="/ordenes">Órdenes</a></li>
              <li><a href="/productos-mas-vendidos">Productos más vendidos</a></li>
              <li><a href="/series">Series</a></li>
            </ul>
          </div>
          <div className="content">
            <h1>Detalles de Orden Nro {orden.id}</h1>
            <div className="detalle-orden">
              <h2>Datos de compra</h2>
              <div className="orden-datos-compra">
                <div>
                  <h3>Dirección de Envío</h3>
                  <p>{orden.direccionEnvio}</p>
                </div>
                <div>
                  <h3>Pago</h3>
                  <p>{orden.metodoPago}</p>
                  <p>Tarjeta de Crédito que termina en: {orden.terminaEn}</p>
                </div>
              </div>
              <h2>Método de Envío</h2>
              <div className="orden-metodo-envio">
                <p>{orden.metodoEnvio}</p>
              </div>
              <h2>Items en Pedido:</h2>
              <ul className="orden-items">
                {orden.productos.map((producto, index) => (
                  <li key={index}>
                    {producto.cantidad}x {producto.nombre} - S/ {producto.precio.toFixed(2)}
                  </li>
                ))}
              </ul>
              <h2>Resumen de Orden</h2>
              <div className="orden-resumen">
                <p>Subtotal: S/ {orden.subtotal.toFixed(2)}</p>
                <p>Envío: S/ {orden.envio.toFixed(2)}</p>
                <p>Impuestos: S/ {orden.impuestos.toFixed(2)}</p>
                <p>Total: S/ {orden.total.toFixed(2)}</p>
              </div>
              <button className="btn-cancelar">Cancelar Pedido</button>
            </div>
          </div>
        </div>
        <Pie />
      </>
    );
  }
  
  export default DetalleOrdenAdmin;