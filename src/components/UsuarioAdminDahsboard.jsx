import React from 'react'
import Pie from './Pie'
import Cabecera from './Cabecera'

function UsuarioAdminDashboard() {
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
        <main class="dashboard">
            <div class="card">68<br/>Órdenes del día de hoy</div>
            <div class="card">12<br/>Usuarios nuevos</div>
            <div class="card income">S/ 13,500.00<br/>Ingresos de hoy</div>

        </main>
        

        <Pie/>
        </>
    )
}

export default UsuarioAdminDashboard