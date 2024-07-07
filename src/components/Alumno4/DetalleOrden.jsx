import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Pie from "../Pie";
import Cabecera from '../Cabecera';
import "../Parte1.css";
import '../styles/alumno4/DetalleOrden.css';

function DetalleOrden() {
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
            <h2>Mi Cuenta</h2>
            <ul>
              <li><a href="/ordenes-recientes">Órdenes Recientes</a></li>
              <li><a href="/datos-registro">Datos de Registro</a></li>
              <li><a href="/cambiar-password">Cambiar Password</a></li>
            </ul>
          </div>
          <div className="content">
            <h1>Detalle de Orden</h1>
            <div className="detalle-orden">
              <h2>Número de Orden: {orden.id}</h2>
              <p>Fecha: {new Date(orden.fecha).toLocaleDateString()}</p>
              <p>Estado: {orden.estado}</p>
              <h3>Productos</h3>
              <table className="detalle-orden-tabla">
                <thead>
                  <tr>
                    <th>Producto</th>
                    <th>Cantidad</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody>
                  {orden.productos.map((producto, index) => (
                    <tr key={index}>
                      <td>{producto.nombre}</td>
                      <td>{producto.cantidad}</td>
                      <td>${producto.precio.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <h3>Total: ${orden.total.toFixed(2)}</h3>
            </div>
          </div>
        </div>
        <Pie />
      </>
    );
  }
  
  export default DetalleOrden;