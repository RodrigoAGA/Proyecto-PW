import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/alumno6/DetalleUsuarioAdmin.css';

const DetalleUsuarioAdmin = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Simulación de obtención de datos del usuario desde una API
        const userData = {
            id: id,
            firstName: 'Juan',
            lastName: 'Pérez',
            email: 'juan.perez@example.com',
            phone: '123-456-7890',
            orders: [
                { id: 1, date: '2024-07-01', total: 30 },
                { id: 2, date: '2024-07-02', total: 50 }
            ]
        };
        setUser(userData);
    }, [id]);

    return (
        <div className="detalle-usuario-admin">
            <header>
                <h1>Detalle de Usuario (Admin)</h1>
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
                {user ? (
                    <div className="user-details">
                        <p><strong>ID de Usuario:</strong> {user.id}</p>
                        <p><strong>Nombre:</strong> {user.firstName} {user.lastName}</p>
                        <p><strong>Email:</strong> {user.email}</p>
                        <p><strong>Teléfono:</strong> {user.phone}</p>
                        <h2>Órdenes</h2>
                        <ul>
                            {user.orders.map((order, index) => (
                                <li key={index}>ID: {order.id} - Fecha: {order.date} - Total: ${order.total}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </main>
        </div>
    );
};

export default DetalleUsuarioAdmin;
