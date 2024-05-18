import React from 'react'

function UsuarioAdminDashboard() {
    return (
        <>
        <Cabecera/>
        <header>Cuenta - Usuario Administrador - Dashboard</header>
        <nav class="sidebar">
            <ul>
                <li>Admin</li>
                <li>Dashboard</li>
            </ul>
        </nav>
        <main class="dashboard">
            <div class="card">68<br/>Órdenes del día de hoy</div>
            <div class="card">12<br/>Usuarios nuevos</div>
            <div class="card income">S/ 13,500.00<br/>Ingresos de hoy</div>
        </main>
        <footer>LA TIENDITA DEL ABUELO © 2010 - 2020 Privacy — Terms</footer>

        <Pie/>
        </>
    )
}

export default UsuarioAdminDashboard