import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import '../styles/Alumno6/DetalleUsuarioAdmin.css';
import Pie from "../Pie";
import Cabecera from '../Cabecera';
import "../Parte1.css";

function DetalleUsuarioAdmin() {
    const { id } = useParams();
    const [usuario, setUsuario] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const cargarDatosUsuario = async () => {
        try {
          const response = await fetch('/data/usuarios.json');
          if (!response.ok) {
            throw new Error('Error al cargar los datos del usuario');
          }
          const data = await response.json();
          const usuarioEncontrado = data.find(usuario => usuario.id === id);
          if (!usuarioEncontrado) {
            throw new Error('Usuario no encontrado');
          }
          setUsuario(usuarioEncontrado);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      cargarDatosUsuario();
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
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/usuarios-registrados">Usuarios registrados</Link></li>
              <li><Link to="/productos">Productos</Link></li>
              <li><Link to="/ordenes">Órdenes</Link></li>
              <li><Link to="/productos-mas-vendidos">Productos más vendidos</Link></li>
              <li><Link to="/series">Series</Link></li>
            </ul>
          </div>
          <div className="content">
            <h1>Detalle de Usuario Registrado</h1>
            <div className="detalle-usuario">
              <div className="detalle-usuario-info">
                <p>ID: {usuario.id}</p>
                <p>Nombre: {usuario.nombre}</p>
                <p>Correo: {usuario.correo}</p>
                <p>Fecha de Registro: {new Date(usuario.fechaRegistro).toLocaleDateString()}</p>
              </div>
              <h2>Órdenes recientes (máximo 10)</h2>
              <table className="ordenes-recientes">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Fecha de Orden</th>
                    <th>Total</th>
                    <th>Productos</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuario.ordenes.slice(0, 10).map((orden) => (
                    <tr key={orden.id}>
                      <td>{orden.id}</td>
                      <td>{new Date(orden.fecha).toLocaleDateString()}</td>
                      <td>S/ {orden.total.toFixed(2)}</td>
                      <td>{orden.productos}</td>
                      <td>{orden.estado}</td>
                      <td><Link to={`/orden/${orden.id}`}>Ver</Link></td>
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
  
  export default DetalleUsuarioAdmin;