import React, { useState, useEffect } from 'react';
import '../styles/Alumno6/ListaUsuarios.css';

const ListaUsuarios = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        // Simulación de obtención de datos de los usuarios desde una API
        const usersData = [
            { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '123-456-7890' },
            { id: 2, name: 'María López', email: 'maria.lopez@example.com', phone: '987-654-3210' },
            { id: 3, name: 'Carlos García', email: 'carlos.garcia@example.com', phone: '456-789-0123' }
        ];
        setUsers(usersData);
    }, []);

    return (
        <div className="lista-usuarios">
            <header>
                <h1>Lista de Usuarios (Admin)</h1>
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
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Teléfono</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
    );
};

export default ListaUsuarios;
