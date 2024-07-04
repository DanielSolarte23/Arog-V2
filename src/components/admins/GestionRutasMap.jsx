import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/admins/GestionRutaMaps.css";
import HistorialEnRuta from "./HistorialEnRuta";

export default function Maps() {
  return (
    <div className="h-full ">
      <header className="h-[10%] pl-16 flex justify-between px-5 items-center">
        <div className="flex gap-4">
          <button className="bg-verde-principal px-5 py-3 rounded-xl flex justify-center font-semibold text-base h-full">
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
            <i className="text-xl fa-solid fa-magnifying-glass absolute top-4 left-[190px]"></i>
          </div>
        </div>
      </header>
      <main className="h-[45%] flex">
        <table className="w-2/5 border-collapse h-full border border-gray-300">
          <thead>
            <tr>
              <td className="black w-[10%] h-[15%] pl-2 border-x-2 text-center  border-gray-300">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="custom-checkbox"
                  />
                </div>
              </td>
              <td className="black w-[10%] pl-2 border-x-2 border-gray-300">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="custom-checkbox"
                  />
                </div>
              </td>
              <td className="w-[30%] text-center border-x-2 border-gray-200">
                <h4 className=" whitespace-nowrap font-semibold">
                  Nombre de ruta
                </h4>
              </td>
              <td className="w-[25%] border-x-4 border-gray-200 text-center font-semibold">
                <h4>Funcionario</h4>
              </td>
              <td className="w-[25%] border-4 border-gray-200 text-center font-semibold">
                <h4>Vehiculo</h4>
              </td>
            </tr>
          </thead>
          <tbody className="">
            <tr className="border-t-4 h-20 border-gray-200">
              <td className=" w-[10%] pl-2 text-center">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="custom-checkbox checkbox2"
                  />
                </div>
              </td>
              <td className=" w-[10%] text-center">
                <i className="fa-solid fa-gear ">
                  <i className="text-[10px] fa-solid fa-chevron-down"></i>
                </i>
              </td>
              <td className="w-[27%] pl-2">
                <p className="text-lg ">Aida Lucia</p>
              </td>
              <td className="w-[27%] pl-2">
                <h4 className="text-lg ">Funcionario</h4>
              </td>
              <td className="w-[27%] pl-2">
                <h4 className="text-lg ">CPI681</h4>
              </td>
            </tr>
            <tr className="border-t-4 border-gray-200">
              <td className="w-[10%] pl-2 text-center">
              <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="custom-checkbox checkbox3"
                  />
                </div>
              </td>
              <td className="w-[10%] text-center">
                <i className="fa-solid fa-gear">
                  <i className="text-[10px] fa-solid fa-chevron-down"></i>
                </i>
              </td>
              <td className="w-[27%] pl-2">
                <h4 className="text-lg" >Barrio bolivar</h4>
              </td>
              <td className="w-[27%] pl-2">
                <h4 className="text-lg" >Funcionario</h4>
              </td>
              <td className="w-[27%] pl-2">
                <h4 className="text-lg" >CPI681</h4>
              </td>
            </tr>
            <tr className="border-t-4 border-gray-200">
              <td className=" w-[10%] pl-2 text-center">
              <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="myCheckbox"
                    className="custom-checkbox checkbox4"
                  />
                </div>
              </td>
              <td className=" w-[10%] text-center">
                <i className="fa-solid fa-gear">
                  <i className="text-[10px] fa-solid fa-chevron-down"></i>
                </i>
              </td>
              <td className="w-[27%] h-20 pl-2">
                <h4 className="text-lg" >La Esmeralda</h4>
              </td>
              <td className="w-[27%] pl-2">
                <h4 className="text-lg" >Funcionario</h4>
              </td>
              <td className="w-[27%] pl-2">
                <h4 className="text-lg" >CPI681</h4>
              </td>
            </tr>
            <tr className="border-t-4 border-gray-200 h-4" >
              <td className="px-2" colSpan="5">
                # Rutas seleccionadas
              </td>
            </tr>
          </tbody>
        </table>
        <section className="flex justify-center items-center bg-gray-200 w-3/5 h-full">
          <div className=" w-[98%] h-[95%] bg-white">
            <img
              className="w-full h-full"
              src=" "
              alt="Mapa"
             />
          </div>
        </section>
      </main>
      <section className="border-2 border-red-500 h-[45%] w-full">
        <HistorialEnRuta />
      </section>
    </div>
  );
}
