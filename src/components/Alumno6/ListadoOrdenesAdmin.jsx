import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import '../styles/Alumno6/ListadoOrdenesAdmin.css';
import Pie from "../Pie";
import Cabecera from '../Cabecera';
import "../Parte1.css";

function ListadoOrdenesAdmin() {
    const [ordenes, setOrdenes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState('');
  
    useEffect(() => {
      const cargarDatosOrdenes = async () => {
        try {
          const response = await fetch('/data/ordenes.json');
          if (!response.ok) {
            throw new Error('Error al cargar los datos de las órdenes');
          }
          const data = await response.json();
          setOrdenes(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      cargarDatosOrdenes();
    }, []);
  
    const handleBusquedaChange = (e) => {
      setBusqueda(e.target.value);
    };
  
    const ordenesFiltradas = ordenes.filter(orden =>
      orden.direccionEnvio.toLowerCase().includes(busqueda.toLowerCase()) ||
      orden.id.toString().includes(busqueda)
    );
  
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
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/usuarios-registrados">Usuarios registrados</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/ordenes">Órdenes</Link></li>
              <li><Link to="/productos-mas-vendidos">Productos más vendidos</Link></li>
              <li><Link to="/series">Series</Link></li>
            </ul>
          </div>
          <div className="content">
            <h1>Órdenes</h1>
            <div className="lista-ordenes">
              <input
                type="text"
                placeholder="Buscar por dirección de envío o nro de orden..."
                className="busqueda-ordenes"
                value={busqueda}
                onChange={handleBusquedaChange}
              />
              <table className="tabla-ordenes">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Usuario</th>
                    <th>Fecha de Orden</th>
                    <th>Total</th>
                    <th>Correo</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {ordenesFiltradas.map((orden) => (
                    <tr key={orden.id}>
                      <td>{orden.id}</td>
                      <td>{orden.direccionEnvio.split("\n")[0]}</td>
                      <td>{new Date(orden.fecha).toLocaleDateString()}</td>
                      <td>S/ {orden.total.toFixed(2)}</td>
                      <td>{orden.direccionEnvio.split("\n")[2]}</td>
                      <td>{orden.estado}</td>
                      <td>
                        <Link to={`/orden/${orden.id}`}>Ver</Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <Pie />
      </>
    );
  }
  
  export default ListadoOrdenesAdmin;