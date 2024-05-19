import React, { useEffect } from "react";
import Pie from "./Pie";
import Cabecera from "./Cabecera";
import "./Parte1.css"

function Inicio() {
  useEffect(() => {
    const itemsData = [
      { nombre: "Item 1", enlace: "#item1" },
      { nombre: "Item 2", enlace: "#item2" },
      { nombre: "Item 3", enlace: "#item3" },
      { nombre: "Item 4", enlace: "#item4" },
      { nombre: "Item 5", enlace: "#item5" },
    ];

    const itemsContainers = document.querySelectorAll("#items-container");

    itemsContainers.forEach((container) => {
      const itemsDiv = document.createElement("div");
      itemsDiv.classList.add("items");

      itemsData.forEach((item, index) => {
        const containerDiv = document.createElement("div");
        containerDiv.classList.add(
          index === 0 ? "container-rect" : "container-rect2"
        );

        const rectDiv = document.createElement("div");
        rectDiv.classList.add("rect");

        const img = document.createElement("img");
        img.src = "";
        img.alt = "";

        const infoDiv = document.createElement("div");
        infoDiv.classList.add("info-rect");

        const p = document.createElement("p");
        p.textContent = item.nombre;

        const a = document.createElement("a");
        a.href = item.enlace;
        a.textContent = "Learn More";

        infoDiv.appendChild(p);
        infoDiv.appendChild(a);

        containerDiv.appendChild(rectDiv);
        containerDiv.appendChild(infoDiv);

        itemsDiv.appendChild(containerDiv);
      });

      container.appendChild(itemsDiv);
    });
  }, []);

  return (
    <>
      <Cabecera />
      <div className="container">
        <div className="search-input-box">
          <input type="text" placeholder="Busca productos por nombre..." />
        </div>
        <div className="search-button">
          <button>
            <a href="./Busqueda.jsx">Buscar</a>
          </button>
        </div>
      </div>
      <div className="imagenes">
        <div className="container-cuadrado">
          <div className="cuadrado">
            <img src="" alt="" />
          </div>
          <div className="info-cuadrado">
            <p>Coleccion de Items 1: Especiales para regresar al colegio</p>
            <a href="#Coleccion1">Learn More</a>
          </div>
        </div>
        <div className="container-cuadrado2">
          <div className="cuadrado">
            <img src="" alt="" />
          </div>
          <div className="info-cuadrado">
            <p>Coleccion de Items 2: Especiales para la casa</p>
            <a href="#Coleccion1">Learn More</a>
          </div>
        </div>
        <div className="container-cuadrado2">
          <div className="cuadrado">
            <img src="" alt="" />
          </div>
          <div className="info-cuadrado">
            <p>Coleccion de Items 3: Especiales para los pequeños</p>
            <a href="#Coleccion1">Learn More</a>
          </div>
        </div>
      </div>
      <div id="items-container"></div>
      <div id="items-container"></div>
      <hr />
      <div className="items">
        <div>
          <h1>NUEVOS</h1>
        </div>
      </div>
      <div className="anuncio">
        <div className="container-anuncios">
          <div className="anuncios">
            <img src="" alt="" />
          </div>
          <div className="info-anuncios">
            <p>
              Magic The Gathering: Colección de Invierno Fase 2 2024 Nueva
              Temporada
            </p>
            <a href="#item1">Learn More</a>
          </div>
        </div>
        <div className="play-anuncios2">
          <div className="container-anuncios2">
            <div className="anuncios2">
              <img src="" alt="" />
            </div>
            <div className="info-anuncios">
              <p>GI Joe Classified Series Big Boa, Airborne & More</p>
              <a href="#item1">Learn More</a>
            </div>
          </div>
          <div className="container-anuncios2">
            <div className="anuncios2">
              <img src="" alt="" />
            </div>
            <div className="info-anuncios">
              <p>Spawn 30 Anniversary</p>
              <a href="#item1">Learn More</a>
            </div>
          </div>
        </div>
      </div>
      <div id="items-container"></div>
      <Pie />
    </>
  );
}

export default Inicio;
