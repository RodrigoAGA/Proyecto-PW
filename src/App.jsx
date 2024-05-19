import { Routes, Route } from "react-router-dom"
import UsuarioAdminDashboard from './components/UsuarioAdminDahsboard'
import Inicio from './components/Inicio'
import Checkout from "./components/Checkout"
import Carrito from "./components/Carrito"
import PedidoCompleto from "./components/PedidoCompleto"
import Detalle from "./components/Detalle"
import Busqueda from "./components/Busqueda"
import UsuarioAdminAgregarProductos from "./components/UsuarioAdminAgregarProductos"
import UsuarioAdminProductos from "./components/UsuarioAdminProductos"

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/detalle" element={ <Detalle /> } />
        <Route path="/busqueda" element={ <Busqueda /> } />
        <Route path="/admin_dashboard" element={ <UsuarioAdminDashboard /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/carrito" element={ <Carrito /> } />
        <Route path="/pedido_completo" element={ <PedidoCompleto /> } />
        <Route path="/admin_productos" element={ <UsuarioAdminProductos /> } />
        <Route path="/admin_agregar_productos" element={ <UsuarioAdminAgregarProductos /> } />
      </Routes>
    </div>
  )
}

export default App