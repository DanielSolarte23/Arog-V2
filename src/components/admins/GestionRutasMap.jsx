import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/GestionRutaMaps.css"

export default function Maps() {
  return (
    <div className="h-screen">
    <header className="border-2 h-[10%] border-red-600 flex justify-between px-20 items-center">
      <div className="flex gap-5">
        <button className="bg-verde-principal px-5 py-3 rounded-xl font-semibold text-lg">+Añadir Ruta</button>
        <div className=" flex ">
        <button className="boton1 bg-[#d6dec6] h-full w-20 font-semibold text-lg">Archivo</button>
        <button className="bg-[#d6dec6] h-full w-20 font-semibold text-lg">Ruta</button>
        <button className="boton2 bg-[#d6dec6] h-full w-20 font-semibold text-lg">Ayuda</button>
        </div>
      </div>

      <div className="flex gap-5">
      <input className="border border-gray-300 px-5 py-3" type="date" />
      <div className="relative">
        <input className="px-5 py-3 border border-gray-300 h-full w-full" type="text" />
          <i class="text-xl fa-solid fa-magnifying-glass absolute top-4 left-[190px]"></i>
        </div>
      </div>
    </header>
    <main className="border-2 border-green-500 h-[90%]">
        
    </main>
    </div>
  );
}
