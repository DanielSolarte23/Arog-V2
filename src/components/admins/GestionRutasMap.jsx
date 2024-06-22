import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/GestionRutaMaps.css";

export default function Maps() {
  return (
    <div className="h-screen">
      <header className="border-2 h-[10%] border-red-600 flex justify-between px-5 items-center">
        <div className="flex gap-4">
          <button className="bg-verde-principal px-5 py-3 rounded-xl font-semibold text-base h-full max-h-10">
            +Añadir Ruta
          </button>
          <div className=" flex">
            <button className="boton1 bg-[#d6dec6] h-full w-20 font-semibold text-base">
              Archivo
            </button>
            <button className="bg-[#d6dec6] h-full w-20 font-semibold text-base">
              Ruta
            </button>
            <button className="boton2 bg-[#d6dec6] h-full w-20 font-semibold text-base">
              Ayuda
            </button>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <input
            className="border border-gray-300 px-5 h-full max-h-10 py-3"
            type="date"
          />
          <div className="relative">
            <input
              className="px-5 py-3 border border-gray-300 h-full max-h-10 w-full"
              type="text"
            />
            <i class="text-xl fa-solid fa-magnifying-glass absolute top-4 left-[190px]"></i>
          </div>
        </div>
      </header>
      <main className="border-2 border-green-500 h-[45%]">
        <table className="w-2/5 border-collapse h-full">
          <thead>
            <tr>
              <td className="black w-[10%] pl-3 border-x-2 border-gray-500">
                <input type="checkbox"/>
              </td>
              <td className="black w-[10%] pl-3 border-x-2 border-gray-500">
                <input type="checkbox" />
              </td>
              <td className="w-[30%] text-center border-x-2 border-gray-500">
                <h4 className=" whitespace-nowrap font-semibold">Nombre de ruta</h4>
              </td>
              <td className="w-[25%] border-x-2 border-gray-500    text-center font-semibold">
                <h4>Funcionario</h4>
              </td>
              <td className="w-[25%] border-2 border-green-600 text-center font-semibold">
                <h4>Vehiculo</h4>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t-2 border-gray-500">
              <td className=" w-[10%] pl-3">
                <input type="checkbox" />
              </td>
              <td className=" w-[10%] pl-3">
                <input type="checkbox" />
              </td>
              <td className="w-[27%">
                <p>hola</p>
              </td>
              <td className="w-[27%]">
                <h4>hola DAN</h4>
              </td>
              <td className="w-[27%">
                <h4>hola</h4>
              </td>
            </tr>
            <tr>
              <td className="border border-black w-[10%] pl-3">
                <input type="checkbox" />
              </td>
              <td className="border border-black w-[10%] pl-3">
                <input type="checkbox" />
              </td>
              <td className="w-[27%] border-2 border-green-600">
                <h4>hola</h4>
              </td>
              <td className="w-[27%] border-2 border-green-600">
                <h4>hola DAN</h4>
              </td>
              <td className="w-[27%] border-2 border-green-600">
                <h4>hola</h4>
              </td>
            </tr>
            <tr>
              <td className="border border-black w-[10%] pl-3">
                <input type="checkbox" />
              </td>
              <td className="border border-black w-[10%] pl-3">
                <input type="checkbox" />
              </td>
              <td className="w-[27%] border-2 border-green-600">
                <h4>hola</h4>
              </td>
              <td className="w-[27%] border-2 border-green-600">
                <h4>hola DAN</h4>
              </td>
              <td className="w-[27%] border-2 border-green-600">
                <h4>hola</h4>
              </td>
            </tr>
            <tr>
              <td className="border-2 border-black" colSpan="5">
                HOLA
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
