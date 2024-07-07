import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/Alumno6/ListaUsuarios.css';
import Pie from "../Pie";
import Cabecera from '../Cabecera';
import "../Parte1.css";

function ListaUsuariosAdmin() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [busqueda, setBusqueda] = useState('');
  
    useEffect(() => {
      const cargarDatosUsuarios = async () => {
        try {
          const response = await fetch('/data/usuarios.json');
          if (!response.ok) {
            throw new Error('Error al cargar los datos de los usuarios');
          }
          const data = await response.json();
          setUsuarios(data);
          setLoading(false);
        } catch (error) {
          setError(error.message);
          setLoading(false);
        }
      };
  
      cargarDatosUsuarios();
    }, []);
  
    const cambiarEstado = (id, nuevoEstado) => {
      setUsuarios(prevUsuarios =>
        prevUsuarios.map(usuario =>
          usuario.id === id ? { ...usuario, estado: nuevoEstado } : usuario
        )
      );
    };
  
    const handleBusquedaChange = (e) => {
      setBusqueda(e.target.value);
    };
  
    const usuariosFiltrados = usuarios.filter(usuario =>
      usuario.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      usuario.apellido.toLowerCase().includes(busqueda.toLowerCase()) ||
      usuario.correo.toLowerCase().includes(busqueda.toLowerCase())
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
            <h1>Usuarios registrados</h1>
            <div className="lista-usuarios">
              <input
                type="text"
                placeholder="Buscar por correo, nombre o apellidos..."
                className="busqueda-usuarios"
                value={busqueda}
                onChange={handleBusquedaChange}
              />
              <table className="tabla-usuarios">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Correo</th>
                    <th>Fecha de Registro</th>
                    <th>Estado</th>
                    <th>Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {usuariosFiltrados.map((usuario) => (
                    <tr key={usuario.id}>
                      <td>{usuario.id}</td>
                      <td>{usuario.nombre}</td>
                      <td>{usuario.apellido}</td>
                      <td>{usuario.correo}</td>
                      <td>{new Date(usuario.fechaRegistro).toLocaleDateString()}</td>
                      <td>{usuario.estado}</td>
                      <td>
                        <Link to={`/usuario/${usuario.id}`}>Ver</Link> | 
                        {usuario.estado === "Activo" ? (
                          <button onClick={() => cambiarEstado(usuario.id, "Inactivo")}>Desactivar</button>
                        ) : (
                          <button onClick={() => cambiarEstado(usuario.id, "Activo")}>Activar</button>
                        )}
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
  
  export default ListaUsuariosAdmin;