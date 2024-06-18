import React from "react"

export default function imgFondo() {
    return (
        <>
      {/* Contenedor de la imagen y texto */}
      <section className="w-[70%] h-[70%] ml-52 flex static mt-0 rounded-2xl bg-cover bg-center  bg-no-repeat bg-[url('src/images/textura-hoja-verde.jpg')] bg-slate-500">
        <img className=" ml-[45%]" src="src/images/gif-cell-phone.gif" alt="cell phone" />
        <article className=" h-[25%] p-2 ml-12 mt-64 font-semibold text-5xl absolute text-white ">
        <h1>Manos a la obra</h1>
        <p>#YoCompostoYRecicloyTu</p>
        <p>#MisReciduosNoSonBasura</p>
        </article>
      </section>
    </>
    )
}
