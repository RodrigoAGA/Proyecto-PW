import React, {useEffect} from 'react'
import Pie from '../Pie'
import Cabecera from '../Cabecera'
import "../Parte1.css"
import {Link} from 'react-router-dom'

function AdminDashboard() {
    
    
    
    return (
        <>
        <Cabecera/>
        <div class="container">
        <div class="sidebar">
            <ul>
                <li><a href="./admin_dashboard">Dashboard</a></li>
                <li><a href="./ListaUsuarios">Usuarios registrados</a></li>
                <li><a href="./admin_lista_productos">Productos</a></li>
                <li><a href="./ListadoOrdenesAdmin">Órdenes</a></li>
                <li><a href="#">Productos más vendidos</a></li>
                <li><a href="./ListadoSeries">Series</a></li>
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

export default AdminDashboard