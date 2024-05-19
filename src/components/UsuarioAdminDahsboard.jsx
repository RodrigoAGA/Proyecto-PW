import React from 'react'
import Pie from './Pie'
import Cabecera from './Cabecera'
import "./Parte1.css"

function UsuarioAdminDashboard() {
    return (
        <>
        <Cabecera/>
        <div class="container">
        <div class="sidebar">
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Usuarios registrados</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Órdenes</a></li>
                <li><a href="#">Productos más vendidos</a></li>
                <li><a href="#">Series</a></li>
            </ul>
        </div>
        <div class="main-content">
            <div class="header">
                <h2>Dashboard</h2>
                <a href="#">Cambiar Fecha o Periodo</a>
            </div>
            <div class="dashboard-cards">
                <div class="card">
                    <h1>68</h1>
                    <p>Órdenes del día de hoy</p>
                </div>
                <div class="card">
                    <h1>12</h1>
                    <p>Usuarios nuevos</p>
                </div>
                <div class="card">
                    <h1>S/13,500.00</h1>
                    <p>Ingresos de hoy</p>
                </div>
            </div>
        </div>
    </div>
        

        <Pie/>
        </>
    )
}

export default UsuarioAdminDashboard