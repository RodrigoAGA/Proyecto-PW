import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Alumno6/DetalleOrdenAdmin.css';

const DetalleOrdenAdmin = () => {
    const { id } = useParams();
    const [order, setOrder] = useState(null);

    useEffect(() => {
        // Simulación de obtención de datos de la orden desde una API
        const orderData = {
            id: id,
            user: 'Juan Pérez',
            date: '2024-07-07',
            status: 'En proceso',
            items: [
                { name: 'Producto 1', quantity: 2, price: 10 },
                { name: 'Producto 2', quantity: 1, price: 20 }
            ],
            total: 40
        };
        setOrder(orderData);
    }, [id]);

    return (
        <div className="detalle-orden-admin">
            <header>
                <h1>Detalle de Orden (Admin)</h1>
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
                {order ? (
                    <div className="order-details">
                        <p><strong>ID de Orden:</strong> {order.id}</p>
                        <p><strong>Usuario:</strong> {order.user}</p>
                        <p><strong>Fecha:</strong> {order.date}</p>
                        <p><strong>Estado:</strong> {order.status}</p>
                        <h2>Items</h2>
                        <ul>
                            {order.items.map((item, index) => (
                                <li key={index}>{item.name} - Cantidad: {item.quantity} - Precio: ${item.price}</li>
                            ))}
                        </ul>
                        <p><strong>Total:</strong> ${order.total}</p>
                    </div>
                ) : (
                    <p>Cargando...</p>
                )}
            </main>
        </div>
    );
};

export default DetalleOrdenAdmin;
