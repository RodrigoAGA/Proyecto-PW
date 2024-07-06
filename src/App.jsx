import { Routes, Route } from "react-router-dom"
import Inicio from './components/Inicio'
import Checkout from "./components/Checkout"
import Carrito from "./components/Carrito"
import PedidoCompleto from "./components/PedidoCompleto"
import Detalle from "./components/Detalle"
import Busqueda from "./components/Busqueda"
import ListadoSeries from "./components/1Listado_Serie_A"
import AgregarSerie from "./components/2Agregar_Serie_Admin"
import DetallesOrden from "./components/3Detalles_De_Orden_Usuario_Registrado"
import DatosDeRegistroUsuario from "./components/4Datos_De_Registro_Usuario_Registrado"
import CambiarContrasena from "./components/5Cambiar_Contraseña"
import AdminOrderDetail from "./components/AdminOrderDetail"
import AdminOrders from "./components/AdminOrders"
import AdminUserDetail  from "./components/AdminUserDetail"
import AdminUsers from "./components/AdminUsers"
import Formulario from "./components/Formulario"
import Registro from "./components/Registro"
import Recuperar from "./components/Recuperar"

// Componentes de alumno 5
import AdminDashboard from './components/alumno5/AdminDahsboard'
import AdminAgregarProductos from "./components/alumno5/AdminAgregarProductos"
import AdminListaProductos from "./components/alumno5/AdminListaProductos"

function App() {
  return (
    <div className="Aplicacion">
      <Routes>
        {/* Ruta de inicio por defecto */}
        <Route path="/" element={ <Inicio /> } />

        <Route path="/detalle" element={ <Detalle /> } />
        <Route path="/busqueda" element={ <Busqueda /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/carrito" element={ <Carrito /> } />
        <Route path="/pedido_completo" element={ <PedidoCompleto /> } />
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
        <Route path="/Recuperar" element={ <Recuperar /> } />
        <Route path="/Registro" element={ <Registro /> } />
        
        {/* Rutas de alumno 5 */}
        <Route path="/admin_dashboard" element={ <AdminDashboard /> } />
        <Route path="/admin_lista_productos" element={ <AdminListaProductos /> } />
        <Route path="/admin_agregar_productos" element={ <AdminAgregarProductos /> } />
      
      </Routes>
    </div>
  )
}

export default App
