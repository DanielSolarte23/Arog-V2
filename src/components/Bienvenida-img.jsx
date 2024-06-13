import React from "react"

export default function imgFondo() {
    return (
        <>
      {/* Contenedor de la imagen y texto */}
      <section className="w-[70%] h-[75%] ml-52 flex static mt-0">
        <img className="w-[100%] -mt-4 " src="src/images/img-celular.png" alt="imagen" />
        <article className=" h-[25%] p-2 ml-12 mt-40 font-semibold text-3xl absolute text-white ">
        <h1>Manos a la obra</h1>
        <p>#YoCompostoYRecicloyTu</p>
        <p>#MisReciduosNoSonBasura</p>
        </article>
      </section>
    </>
    )
}
