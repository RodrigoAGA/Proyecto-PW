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
// import ListadoSeries from "./components/1Listado_Serie_A"
// import AgregarSerie from "./components/2Agregar_Serie_Admin";
// import DetallesOrden from "./components/3Detalles_De_Orden_Usuario_Registrado"
// import DatosDeRegistroUsuario from "./components/4Datos_De_Registro_Usuario_Registrado";
// import CambiarContrasena from "./components/5Cambiar_Contraseña";

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
        {/* <Route path="/listado_series" element={<ListadoSeries/>}/> */}
        {/* <Route path="/agregar_serie" element={<AgregarSerie/>}/> */}
        {/* <Route path="/detalles_orden" element={<DetallesOrden/>}/> */}
        {/* <Route path="/datos_registro_usuario" element={<DatosDeRegistroUsuario/>}/> */}
        {/* <Route path="/cambiar_contrasena" element={<CambiarContrasena/>}/> */}
      </Routes>
    </div>
  )
}

export default App