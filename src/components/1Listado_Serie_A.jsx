import React from 'react';
import './styles/1ListSeriesAdmin.css';

const ListadoSeries = () => {
  return (
    <div style={styles.body}>
      <div style={styles.cabecera}>
        <h2>TIENDA</h2>
      </div>
      <div style={styles.lateral}>
        <div style={styles.title}>Admin</div>
        <div id="otros">
          <ul>
            <li style={styles.otrosLi}>Dashboard</li>
            <li style={styles.otrosLi}>Usuarios registrados</li>
            <li style={styles.otrosLi}>Productos</li>
            <li style={styles.otrosLi}>Órdenes</li>
            <li style={styles.otrosLi}>Productos más vendidos</li>
            <li style={styles.otrosLi}>Series</li>
          </ul>
        </div>
      </div>
      <div style={styles.series}>Series</div>
      <input
        type="text"
        id="busqueda"
        placeholder="Buscar por nombre, descripción o ID"
        required
        style={styles.busqueda}
      />
      {[1, 2, 3, 4, 5, 6, 7, 99, 9, 10].map((id, index) => (
        <nav key={index}>
          <div style={styles.listado}>
            <ul>
              <div style={styles.listado2}>
                <li style={styles.listadoLi}>{id}</li>
                <li style={styles.listadoLi}>
                  {['Manga Dragon Ball VIZ', 'coca cola', 'sprite', 'pepsi', 'ritz', 'morochas', 'chocman', 'pepsi', 'inka cola', 'fanta'][index]}
                </li>
                <li style={styles.listadoLi}>
                  {['Libro', 'gaseosa vainilla', 'gaseosa sabor limon', 'gaseosa sobor vainilla', 'galleta salada', 'galleta sabor chocolate', 'keke bañado en chocolate', 'gaseosa', 'gaseosa', 'gaseosa'][index]}
                </li>
              </div>
              <div style={styles.listado2_2}>
                <li style={styles.listado2_2Li}>{['08/05/24', '09/05/24', '10/05/24', '11/05/24', '12/05/24', '13/05/24', '14/05/24', '15/05/24', '16/05/24', '17/05/24'][index]}</li>
                <li style={styles.listado2_2Li}>{['4', '1', '7', '2', '1', '1', '5', '2', '3', '6'][index]}</li>
                <li style={styles.listado2_2Li}>ver</li>
              </div>
            </ul>
          </div>
        </nav>
      ))}
      <div id="antesig">
        <nav2>
          <ul>
            <li style={styles.anterior}>Anterior</li>
            <li>1</li>
            <li>
              <a href="#" style={styles.nav2Li}>
                2
              </a>
            </li>
            <li>3</li>
            <li>4</li>
            <li style={styles.siguiente}>
              <a href="#" style={styles.nav2Li}>
                Siguiente
              </a>
            </li>
          </ul>
        </nav2>
      </div>
      <iframe id="iframe-pagina2" src="#" style={{ display: 'none' }}></iframe>
    </div>
  );
};
/*document.getElementById('busqueda').addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
      const busqueda = this.value.toLowerCase();
      const series = document.querySelectorAll('nav'); 

      let encontrada = false;

    
      function buscarYMostrarResultados(series) {
          series.forEach(function(nav) {
              const serie = nav.querySelector('#listado2'); 
              const nombre = serie.querySelector('#nombre1').textContent.toLowerCase(); 
              const descrip = serie.querySelector('#descrip1').textContent.toLowerCase();
              const id = serie.querySelector('#id1').textContent.toLowerCase(); 

              
              const regex = new RegExp(busqueda, 'i'); 

             
              if (regex.test(nombre) || regex.test(descrip) || regex.test(id)) {
                  serie.style.display = 'block'; 
                  nav.querySelector('#listado2_2').style.display = 'block'; 
                  encontrada = true;
              } else {
                  serie.style.display = 'none';
                  nav.querySelector('#listado2_2').style.display = 'none'; 
              }
          });
      }

      
      buscarYMostrarResultados(series);

     
      if (!encontrada && busqueda.length > 0) {
          alert('No se encontraron resultados');
      }
  }
});*/

export default ListadoSeries;



