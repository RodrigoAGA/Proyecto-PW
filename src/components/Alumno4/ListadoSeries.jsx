import React, { useState, useEffect } from 'react';
import '../styles/alumno4/ListadoSeries.css';

const ListadoSeries = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        // Simulación de obtención de datos de las series desde una API
        const seriesData = [
            { id: 1, name: 'Serie 1', description: 'Descripción de la Serie 1' },
            { id: 2, name: 'Serie 2', description: 'Descripción de la Serie 2' },
            { id: 3, name: 'Serie 3', description: 'Descripción de la Serie 3' },
        ];
        setSeries(seriesData);
    }, []);

    return (
        <div className="listado-series">
            <header>
                <h1>Listado de Series</h1>
            </header>
            <aside className="admin-menu">
                <ul>
                    <li>Dashboard</li>
                    <li>Usuarios registrados</li>
                    <li>Productos</li>
                    <li>Órdenes</li>
                    <li>Productos más vendidos</li>
                    <li>Series</li>
                </ul>
            </aside>
            <main className="content">
                <div className="series-list">
                    {series.map((serie) => (
                        <div key={serie.id} className="serie">
                            <h2>{serie.name}</h2>
                            <p>{serie.description}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default ListadoSeries;
