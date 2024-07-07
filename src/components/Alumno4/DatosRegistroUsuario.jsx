import React, { useState } from 'react';
import '../styles/alumno4/DatosRegistroUsuario.css';

const DatosRegistroUsuario = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleSave = () => {
        // Lógica para guardar los datos del usuario
    };

    return (
        <div className="datos-registro-usuario">
            <header>
                <h1>Datos de Registro del Usuario</h1>
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
                        <label>Nombre</label>
                        <input
                            type="text"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Apellido</label>
                        <input
                            type="text"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Teléfono</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <button className="save-button" onClick={handleSave}>Guardar</button>
                </div>
            </main>
        </div>
    );
};

export default DatosRegistroUsuario;
