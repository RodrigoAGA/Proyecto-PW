import React, { useState } from 'react';
import '../styles/alumno4/AgregarSerie.css';

const AgregarSerie = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [products, setProducts] = useState([
        { id: 1, description: 'Manga Dragon Ball Vol 1' },
        { id: 2, description: 'Manga Dragon Ball Vol 2' }
    ]);

    const handleAddImage = () => {
        // Lógica para agregar imagen
    };

    const handleSave = () => {
        // Lógica para guardar la serie
    };

    const handleRemoveProduct = (id) => {
        setProducts(products.filter(product => product.id !== id));
    };

    return (
        <div className="agregar-serie">
            <header>
                <h1>Pantalla de Mantenimiento de Serie (Agregar / Detalle)</h1>
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
                        <label>Agregar Serie</label>
                        <div className="image-placeholder" onClick={handleAddImage}>
                            <p>Agregar Imagen</p>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Nombre</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="form-group">
                        <label>Descripción</label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </div>
                </div>
                <div className="products">
                    <h2>Productos en la serie</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Descripción</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>
                            {products.map(product => (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.description}</td>
                                    <td>
                                        <button onClick={() => handleRemoveProduct(product.id)}>Remover</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                <button className="save-button" onClick={handleSave}>Guardar</button>
            </main>
        </div>
    );
};

export default AgregarSerie;
