import React from "react"
import celularImg from '../images/img-celular.png';


export default function imgFondo() {
    return (
        <>
      {/* Contenedor de la imagen y texto */}
      <section>
        <img src={celularImg} alt="Imagen de fondo" />
        <h1>Manos a la obra</h1>
        <p>#YoCompostoYRecicloyTu</p>
        <p>#MisReciduosNoSonBasura</p>
      </section>
    </>
    )
}
