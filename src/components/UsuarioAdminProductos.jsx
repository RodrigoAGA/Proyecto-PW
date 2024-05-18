import React from 'react'
import Pie from './Pie'
import Cabecera from './Cabecera'

function UsuarioAdminProductos() {
    return (
        <>
        <Cabecera/>
        <br/>
        <nav class="sidebar">
            <ul>
                <li>Admin</li>
                <li>Dashboard</li>
                <li>Usuarios registrados</li>
                <li>Productos</li>
                <li>Ordenes</li>
                <li>Productos mas vendidos</li>
                <li>Series</li>
    
            </ul>
        </nav>
     
        <Pie/>
        </>
    )
}

export default UsuarioAdminProductos