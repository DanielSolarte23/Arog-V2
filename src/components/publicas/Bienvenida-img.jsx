import React from "react";
import "../../styles/homePage.css"


export default function imgFondo() {
  return (
    <div className="w-full contenedor-bienvenida  h-[65%] mt-8  px-36 border-red-500">
      {/* Contenedor de la imagen y texto */}
      <section className="w-full h-full flex static mt-0 rounded-2xl bg-cover bg-center  bg-no-repeat bg-[url('src/images/textura-hoja-verde.jpg')] bg-slate-500">
        <img
          className="absolute top-[85px] right-2  h-5/6"
          src="src/images/gif-cell-phone.gif"
          alt="cell phone"
        />
        <article className=" h-[25%] p-2 bottom-80 left-64 font-bold text-5xl absolute text-white">
          <h1 className="text-shadow-2xl">Manos a la obra</h1>
          <p className=" text-shadow-2xl">#YoCompostoYRecicloyTu</p>
          <p className=" text-shadow-2xl">#MisReciduosNoSonBasura</p>
        </article>
      </section>
    </div>
  );
}
