import { Routes, Route } from "react-router-dom"
import UsuarioAdminDashboard from './components/UsuarioAdminDahsboard'
import Inicio from './components/Inicio'
import Checkout from "./components/Checkout"
import Carrito from "./components/Carrito"
import PedidoCompleto from "./components/PedidoCompleto"
import UsuarioAdminProductos from "./components/UsuarioAdminProductos"
import UsuarioAdminAgregarProducto from "./components/UsuarioAdminAgregarProducto"
// import UsuarioAdminProductos from "./components/UsuarioAdminProductos"

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <Inicio /> } />
        <Route path="/usuario_admin_dashboard" element={ <UsuarioAdminDashboard /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/carrito" element={ <Carrito /> } />
        <Route path="/pedido_completo" element={ <PedidoCompleto /> } />
        <Route path="/usuario_admin_productos" element={ <UsuarioAdminProductos /> } />
        <Route path="/usuario_admin_agregar_producto" element={ <UsuarioAdminAgregarProducto /> } />
      </Routes>
    </div>
  )
}

export default App