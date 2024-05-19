import React, { useEffect }  from 'react'
import Pie from './Pie'
import Cabecera from './Cabecera'
import { Link } from "react-router-dom";

function Carrito() {

  const [productosCarrito, setProductosCarrito] = React.useState(() => {
    const savedCarrito = localStorage.getItem('productosCarrito');
    return savedCarrito ? JSON.parse(savedCarrito) : [
      {
        id: 1,
        nombre: 'Voltron Mini Action Voltron Vehicle Force Figure (Standard)',
        precio: 69.00,
        cantidad: 1,
      },
      {
        id: 2,
        nombre: 'Star Wars Collection: Darth Vader White (Special Christmas 2024 Disney Edition)',
        precio: 65.00,
        cantidad: 2,
      },
      {
        id: 3,
        nombre: 'Star Wars Collection: Darth Vader White (Special Christmas 2024 Disney Edition)',
        precio: 65.00,
        cantidad: 2,
      },
    ];
  });

  const [productosGuardados, setProductosGuardados] = React.useState(() => {
    const savedGuardados = localStorage.getItem('productosGuardados');
    return savedGuardados ? JSON.parse(savedGuardados) : [];
  });
  useEffect(() => {
    localStorage.setItem('productosCarrito', JSON.stringify(productosCarrito));
  }, [productosCarrito]);

  useEffect(() => {
    localStorage.setItem('productosGuardados', JSON.stringify(productosGuardados));
  }, [productosGuardados]);

  const handleEliminarProductoCarrito = (idProducto) => {
    setProductosCarrito(productosCarrito.filter((producto) => producto.id !== idProducto));
  };

  const handleGuardarParaDespues = (idProducto) => {
    const producto = productosCarrito.find((producto) => producto.id === idProducto);
    if (producto) {
      setProductosCarrito(productosCarrito.filter((producto) => producto.id !== idProducto));
      setProductosGuardados([...productosGuardados, producto]);
    }
  };

  const handleMoverAlCarrito = (idProducto) => {
    const producto = productosGuardados.find((producto) => producto.id === idProducto);
    if (producto) {
      setProductosGuardados(productosGuardados.filter((producto) => producto.id !== idProducto));
      setProductosCarrito([...productosCarrito, producto]);
    }
  };

  const handleCambiarCantidad = (idProducto, nuevaCantidad) => {
    setProductosCarrito(
      productosCarrito.map((producto) => {
        if (producto.id === idProducto) {
          return { ...producto, cantidad: nuevaCantidad };
        } else {
          return producto;
        }
      })
    );
  };

  const calcularTotalCarrito = () => {
    return productosCarrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
  };

  const handleEliminarProductoGuardado = (idProducto) => {
    setProductosGuardados(productosGuardados.filter((producto) => producto.id !== idProducto));
  };

  return (
    <>
      <Cabecera />
      <div className="carrito-compras">
        <h2>Carrito de Compras</h2>
        <div className="productos-carrito">
          {productosCarrito.length === 0 ? (
            <p>No hay productos en el carrito de compras.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productosCarrito.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>S/{producto.precio.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        min={1}
                        value={producto.cantidad}
                        onChange={(event) => handleCambiarCantidad(producto.id, parseInt(event.target.value))}
                      />
                    </td>
                    <td>S/{producto.precio * producto.cantidad}</td>
                    <td>
                      <button onClick={() => handleEliminarProductoCarrito(producto.id)}>Eliminar</button>
                      <button onClick={() => handleGuardarParaDespues(producto.id)}>Guardar para después</button>
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td colSpan="3"></td>
                  <td>Total:</td>
                  <td>S/{calcularTotalCarrito().toFixed(2)}</td>
                </tr>
              </tfoot>
            </table>
          )}
        </div>
        <div className="productos-guardados">
          <h3>Guardados para después</h3>
          {productosGuardados.length === 0 ? (
            <p>No hay productos guardados para después.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Producto</th>
                  <th>Precio</th>
                  <th>Cantidad</th>
                  <th>Subtotal</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {productosGuardados.map((producto) => (
                  <tr key={producto.id}>
                    <td>{producto.nombre}</td>
                    <td>S/{producto.precio.toFixed(2)}</td>
                    <td>
                      <input
                        type="number"
                        min={1}
                        value={producto.cantidad}
                        onChange={(event) => handleCambiarCantidad(producto.id, parseInt(event.target.value))}
                      />
                    </td>
                    <td>S/{producto.precio * producto.cantidad}</td>
                    <td>
                      <button onClick={() => handleMoverAlCarrito(producto.id)}>Mover al carrito</button>
                      <button onClick={() => handleEliminarProductoGuardado(producto.id)}>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
        <button><Link to="/checkout">Completar compra</Link> </button>
      </div>
      <Pie />
    </>
  )
}


export default Carrito