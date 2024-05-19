import React, { useEffect } from 'react'
import Pie from './Pie'
import Cabecera from './Cabecera'
import { Link } from "react-router-dom";

function Checkout() {
  const [shippingMethod, setShippingMethod] = React.useState(() => {
    return localStorage.getItem('shippingMethod') || 'Economic';
  });
  const [paymentMethod, setPaymentMethod] = React.useState(() => {
    return localStorage.getItem('paymentMethod') || 'CreditCard';
  });
  const [formData, setFormData] = React.useState(() => {
    const savedFormData = localStorage.getItem('formData');
    return savedFormData ? JSON.parse(savedFormData) : {
      address: '',
      city: '',
      country: '',
      postalCode: '',
      phoneNumber: '',
      cardNumber: '',
      cardholderName: '',
      expirationDate: '',
      cvv: ''
    };
  });
  const [productosCarrito, setProductosCarrito] = React.useState(() => {
    const savedCartItems = localStorage.getItem('productosCarrito');
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });
  const subtotal = productosCarrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
  const shippingCost = shippingMethod === 'Economic' ? 5 : 17;
  const tax = subtotal * 0.18;
  const total = subtotal + shippingCost + tax;
  useEffect(() => {
    localStorage.setItem('shippingMethod', shippingMethod);
  }, [shippingMethod]);

  useEffect(() => {
    localStorage.setItem('paymentMethod', paymentMethod);
  }, [paymentMethod]);

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <>
      <Cabecera />
      <div className="checkout-page">
        <h1>¡Casi Listo!</h1>
        <p>Tu orden no estará completa hasta que revises y presiones el botón "completar orden" al final de la página.</p>

        <h2>Datos de Compra</h2>
        <h3>Dirección de Envio</h3>
        <form className="shipping-address-form">
          <div className="form-group">
            <label htmlFor="address">Dirección:</label>
            <input type="text" id="address" name="address" required />
          </div>
          <div className="form-group">
            <label htmlFor="city">Ciudad:</label>
            <input type="text" id="city" name="city" required />
          </div>
          <div className="form-group">
            <label htmlFor="country">País:</label>
            <input type="text" id="country" name="country" required />
          </div>
          <div className="form-group">
            <label htmlFor="postalCode">Código Postal:</label>
            <input type="text" id="postalCode" name="postalCode" required />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Teléfono:</label>
            <input type="tel" id="phoneNumber" name="phoneNumber" required />
          </div>
        </form>
        <h3>Pago</h3>
        <div className="payment-methods">
          <div className={paymentMethod === 'CreditCard' ? 'active' : ''}>
            <input
              type="radio"
              id="credit-card"
              name="payment-method"
              value="CreditCard"
              checked={paymentMethod === 'CreditCard'}
              onChange={() => setPaymentMethod('CreditCard')}
            />
            <label htmlFor="credit-card">Pago con tarjeta de crédito</label>
            <div className="credit-card-form">
              <div className="form-group">
                <label htmlFor="cardNumber">Número de tarjeta:</label>
                <input type="text" id="cardNumber" name="cardNumber" required />
              </div>
              <div className="form-group">
                <label htmlFor="cardholderName">Nombre del titular:</label>
                <input type="text" id="cardholderName" name="cardholderName" required />
              </div>
              <div className="form-group">
                <label htmlFor="expirationDate">Fecha de vencimiento:</label>
                <input type="month" id="expirationDate" name="expirationDate" required />
              </div>
              <div className="form-group">
                <label htmlFor="cvv">CVV:</label>
                <input type="password" id="cvv" name="cvv" required />
              </div>
            </div>
          </div>
          <div className={paymentMethod === 'QRCode' ? 'active' : ''}>
            <input
              type="radio"
              id="qr-code"
              name="payment-method"
              value="QRCode"
              checked={paymentMethod === 'QRCode'}
              onChange={() => setPaymentMethod('QRCode')}
            />
            <label htmlFor="qr-code">Pago con código QR</label>
          </div>
        </div>
        <h2>Método de Envio</h2>
        <div className="shipping-methods">
          <div className={shippingMethod === 'Economic' ? 'active' : ''}>
            <input
              type="radio"
              id="economic"
              name="shipping-method"
              value="Economic"
              checked={shippingMethod === 'Economic'}
              onChange={() => setShippingMethod('Economic')}
            />
            <label htmlFor="economic">Económico (5 a 10 días) - S/{shippingCost}</label>
          </div>
          <div className={shippingMethod === 'Priority' ? 'active' : ''}>
            <input
              type="radio"
              id="priority"
              name="shipping-method"
              value="Priority"
              checked={shippingMethod === 'Priority'}
              onChange={() => setShippingMethod('Priority')}
            />
            <label htmlFor="priority">Envio prioritaric (5 a 10 dias)-S/{shippingCost}</label>
          </div>
        </div>

        <h2>Items en Pedido</h2>
        <div className="order-items">
          <ul>
            {productosCarrito.map(producto => (
              <li key={producto.id}>{producto.nombre} - {producto.cantidad} x S/{producto.precio.toFixed(2)}</li>
            ))}
          </ul>
        </div>


        <h2>Resumen de Orden</h2>
        <table>
          <tr>
            <td>Subtotal:</td>
            <td>S/{subtotal}</td>
          </tr>
          <tr>
            <td>Envio:</td>
            <td>S/{shippingCost}</td>
          </tr>
          <tr>
            <td>Impuestos:</td>
            <td>S/{tax}</td>
          </tr>
          <tr>
            <td>Total:</td>
            <td>S/{total}</td>
          </tr>
        </table>
        <button><Link to="/pedido_completo">Completar Orden</Link> </button>
      </div>
      <Pie />
    </>
  )
}

export default Checkout