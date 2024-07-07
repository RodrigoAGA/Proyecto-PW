import React, { useState, useEffect } from 'react';
import '../styles/Alumno6/ListadoOrdenesAdmin.css';

const ListadoOrdenesAdmin = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        // Simulación de obtención de datos de las órdenes desde una API
        const ordersData = [
            { id: 1, user: 'Juan Pérez', date: '2024-07-01', total: 30, status: 'En proceso' },
            { id: 2, user: 'María López', date: '2024-07-02', total: 50, status: 'Completada' },
            { id: 3, user: 'Carlos García', date: '2024-07-03', total: 70, status: 'En proceso' }
        ];
        setOrders(ordersData);
    }, []);

    return (
        <div className="listado-ordenes-admin">
            <header>
                <h1>Listado de Órdenes (Admin)</h1>
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
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Usuario</th>
                            <th>Fecha</th>
                            <th>Total</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.id}</td>
                                <td>{order.user}</td>
                                <td>{order.date}</td>
                                <td>${order.total}</td>
                                <td>{order.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default ListadoOrdenesAdmin;
