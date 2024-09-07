import React from "react";
import Mapa2 from "../../images/Mapa2.png"
import "@fortawesome/fontawesome-free"

export default function TareaDetalle(){
  return (
    <div className="w-1/3 h-full px-2 container flex-col mx-auto">
      <div className="h-[40%]">
        <img
          className="h-full flex w-full  object-fill rounded-3xl"
          src={Mapa2}
        />
      </div>
      <section className="w-full border-b-2  h-[20%]			">
        <h1 className="ml-8 text-gray-400">Estado</h1>
        <div className="flex ml-16 py-2">
        
          <section className="flex-col  items-center	">
            <h2 className="text-lg 	"> <i className="fa-solid fa-user"></i> Ricardo Erazo </h2>
            <h3 className="text-xs	">Ricardo </h3>
            <span className="text-teal-400 text-xs	"> Esperando Tarea </span>
          </section>
        </div>
      </section>
      <section className="w-full border-b-2  h-[18%] ">
        <h1 className="ml-8 text-gray-400 py-2">Titulo</h1>
        <p className="ml-16 text-lg ">Organizar los Residuos</p>
      </section>
      <section className="w-full  h-[20%]">
        <p className="ml-16 text-lg py-5	 ">
          Organizar los Residuos que se recolectaron <br /> en la semana
        </p>
      </section>
    </div>
  );
};


