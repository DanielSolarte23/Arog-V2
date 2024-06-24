import React from "react"

export default function imgFondo() {
    return (
        <>
      {/* Contenedor de la imagen y texto */}
      <section className="sm:w-[90%] h-[45%] ml-7 flex static mt-24 rounded-2xl bg-cover bg-center  bg-no-repeat bg-[url('src/images/textura-hoja-verde.jpg')] md:w-[93%] h-[50%] mt-20 xl:h-[70%] mt-16">
        <img className="sm:ml-[32%] mt-[-10%] absolute w-[95%] md:ml-[27%] mt-[-12%] lg:ml-[35%] w-[79%] xl:ml-[40%] w-[75%] mt-[-8%]" src="src/images/gif-cell-phone.gif" alt="cell phone" />
        <article className="sm:h-[25%] p-2 ml-5 mt-28 font-semibold text-3xl absolute text-white lg:text-4xl xl:text-5xl mt-36">
        <h1>Manos a la obra</h1>
        <p>#YoCompostoYRecicloyTu</p>
        <p>#MisReciduosNoSonBasura</p>
        </article>
      </section>
    </>
    )
}
