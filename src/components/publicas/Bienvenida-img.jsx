import React from "react";
import "../../styles/homePage.css"


export default function imgFondo() {
  return (
    <div id="Inicio" className="w-full contenedor-bienvenida  h-[90%] px-28">
      {/* Contenedor de la imagen y texto */}
      <div className="h-[21%] w-full"></div>
      <section className="w-full h-3/4 flex static mt-0 rounded-2xl bg-cover bg-center  bg-no-repeat bg-[url('src/images/textura-hoja-verde.jpg')] bg-slate-500">
        <img
          className="absolute top-[80px] right-1  h-[87%]"
          src="src/images/gif-cell-phone.gif"
          alt="cell phone"
        />
        <article className=" h-full flex flex-col justify-center pl-14  p-2  text-3xl  text-white">
          <h1 className="text-shadow-2xl text-5xl font-bold">Manos a la obra</h1>
          <p className=" text-shadow-2xl">#YoCompostoYRecicloyTu</p>
          <p className=" text-shadow-2xl">#MisReciduosNoSonBasura</p>
        </article>
      </section>
    </div>
  );
}
