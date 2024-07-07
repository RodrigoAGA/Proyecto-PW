import React, { useState, useEffect } from 'react';
import Pie from "../Pie";
import Cabecera from '../Cabecera';
import "../Parte1.css";
import '../styles/alumno4/ListadoSeries.css';

function ListadoSeries() {
    const [datosSeries, setDatosSeries] = useState([]);
    const [seriesFiltradas, setSeriesFiltradas] = useState([]);
    const [paginaActual, setPaginaActual] = useState(1);
    const [itemsPorPagina] = useState(5); // Número de elementos por página
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const [consultaBusqueda, setConsultaBusqueda] = useState("");
  
    useEffect(() => {
      fetch('/data/series.json')
        .then(response => {
          if (!response.ok) {
            throw new Error('La respuesta de la red no fue correcta ' + response.statusText);
          }
          return response.json();
        })
        .then(data => {
          setDatosSeries(data.series);
          setSeriesFiltradas(data.series);
          setCargando(false);
        })
        .catch(error => {
          setError(error.message);
          setCargando(false);
        });
    }, []);
  
    useEffect(() => {
      setSeriesFiltradas(
        datosSeries.filter(serie =>
          serie.name.toLowerCase().includes(consultaBusqueda.toLowerCase()) ||
          serie.description.toLowerCase().includes(consultaBusqueda.toLowerCase()) ||
          serie.season.toLowerCase().includes(consultaBusqueda.toLowerCase()) ||
          serie.genre.join(", ").toLowerCase().includes(consultaBusqueda.toLowerCase())
        )
      );
      setPaginaActual(1); // Resetear a la primera página al hacer una búsqueda
    }, [consultaBusqueda, datosSeries]);
  
    const manejarVerMas = (serie) => {
      const queryParams = new URLSearchParams({
        titulo: serie.name,
        temporada: serie.season,
        imagenSrc: serie.image,
        descripcion: serie.description,
        genero: serie.genre.join(", ")
      }).toString();
      window.location.href = `./detalleSerie?${queryParams}`;
    };
  
    // Obtener los elementos actuales
    const indiceUltimoItem = paginaActual * itemsPorPagina;
    const indicePrimerItem = indiceUltimoItem - itemsPorPagina;
    const itemsActuales = seriesFiltradas.slice(indicePrimerItem, indiceUltimoItem);
  
    // Cambiar de página
    const paginar = (numeroPagina) => setPaginaActual(numeroPagina);
  
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
            <h1>Series</h1>
            <input
              type="text"
              className="search-box"
              placeholder="Buscar por nombre, descripción o ID..."
              value={consultaBusqueda}
              onChange={(e) => setConsultaBusqueda(e.target.value)}
            />
            {cargando ? (
              <p>Cargando series...</p>
            ) : error ? (
              <p>Error al cargar los datos: {error}</p>
            ) : (
              <>
                <table className="series-table">
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Nombre</th>
                      <th>Descripción</th>
                      <th>Temporada</th>
                      <th>Género</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {itemsActuales.map((serie, index) => (
                      <tr key={index}>
                        <td>{indicePrimerItem + index + 1}</td>
                        <td>{serie.name}</td>
                        <td>{serie.description}</td>
                        <td>{serie.season}</td>
                        <td>{serie.genre.join(", ")}</td>
                        <td>
                          <button onClick={() => manejarVerMas(serie)}>Ver</button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div className="pagination">
                  <button onClick={() => paginar(paginaActual - 1)} disabled={paginaActual === 1}>&laquo; Anterior</button>
                  {Array.from({ length: Math.ceil(seriesFiltradas.length / itemsPorPagina) }, (_, index) => (
                    <button
                      key={index + 1}
                      onClick={() => paginar(index + 1)}
                      className={paginaActual === index + 1 ? 'active' : ''}
                    >
                      {index + 1}
                    </button>
                  ))}
                  <button onClick={() => paginar(paginaActual + 1)} disabled={paginaActual === Math.ceil(seriesFiltradas.length / itemsPorPagina)}>Siguiente &raquo;</button>
                </div>
              </>
            )}
          </div>
        </div>
        <Pie />
      </>
    );
  }
  
  export default ListadoSeries;