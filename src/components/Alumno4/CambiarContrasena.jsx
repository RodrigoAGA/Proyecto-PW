import React, { useState } from 'react';
import '../styles/alumno4/CambiarContrasena.css';

const CambiarContrasena = () => {
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleChangePassword = () => {
        // Lógica para cambiar la contraseña
    };

    return (
        <div className="cambiar-contrasena">
            <header>
                <h1>Cambiar Contraseña</h1>
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
                <div className="form">
                    <div className="form-group">
                        <label>Contraseña Actual</label>
                        <input
                            type="password"
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Nueva Contraseña</label>
                        <input
                            type="password"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Confirmar Nueva Contraseña</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </div>
                    <button className="change-button" onClick={handleChangePassword}>Cambiar Contraseña</button>
                </div>
            </main>
        </div>
    );
};

export default CambiarContrasena;
