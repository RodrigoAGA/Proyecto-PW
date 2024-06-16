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
import ListadoSeries from "./components/1Listado_Serie_A"
import AgregarSerie from "./components/2Agregar_Serie_Admin"
import DetallesOrden from "./components/3Detalles_De_Orden_Usuario_Registrado"
import DatosDeRegistroUsuario from "./components/4Datos_De_Registro_Usuario_Registrado"
import CambiarContrasena from "./components/5Cambiar_Contraseña"
import AdminOrderDetail from "./components/AdminOrderDetail"
import AdminOrders from "./components/AdminOrders"
import AdminUserDetail  from "./components/AdminUserDetail"
import AdminUsers from "./components/AdminUsers"

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
        <Route path="/Listado_Series" element={<ListadoSeries/>}/> 
        <Route path="/Agregar_Serie" element={<AgregarSerie/>}/> 
        <Route path="/DetallesOrden" element={<DetallesOrden/>}/> 
        <Route path="/DatosDeRegistroUsuario" element={<DatosDeRegistroUsuario/>}/> 
        <Route path="/CambiarContrasena" element={<CambiarContrasena/>}/> 
        <Route path="/admin_order_detail" element={ <AdminOrderDetail /> } />
        <Route path="/admin_orders" element={ <AdminOrders /> } />
        <Route path="/admin_user_detail" element={ <AdminUserDetail /> } />
        <Route path="/admin_users" element={ <AdminUsers /> } />
        <Route path="/Formulario" element={ <Formulario /> } />
      </Routes>
    </div>
  )
}

export default App
