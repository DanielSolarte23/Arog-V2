import React from "react";
import "@fortawesome/fontawesome-free";

export default function HistorialEnRuta() {
  return (
    <div className="w-full h-full flex">
      <section className="border-2 border-green-500 h-full w-1/5">
        <table className="w-full border-collapse h-full ">
          <thead>
            <tr>
              <td className="w-full  text-center  border-gray-200" colSpan="2">
                <h4 className=" whitespace-nowrap font-semibold">
                  Nombre de ruta
                </h4>
              </td>
            </tr>
          </thead>
          <tbody>
        <tr className="border-2 border-black h-1/3"> 
          <td className="w-[10%] text-center border-gray-200">
            <div className="bg-orange-500 h-full flex items-center justify-center">
              H
            </div>
          </td>
          <td className="w-full text-center border-gray-200">
            <h4 className="whitespace-nowrap font-semibold">
              Nombre de ruta
            </h4>
          </td>
        </tr>
        <tr className="border-2 border-black h-1/3"> 
          <td className="w-[10%] text-center border-gray-200">
            <div className="bg-orange-500 h-full flex items-center justify-center">
              H
            </div>
          </td>
          <td className="w-full text-center border-gray-200" >
            <h4 className="whitespace-nowrap font-semibold">
              Nombre de ruta
            </h4>
          </td>
        </tr>
        <tr className="border-2 border-black h-1/3"> 
          <td className="w-[10%] text-center border-gray-200">
            <div className="bg-orange-500 h-full flex items-center justify-center">
              H
            </div>
          </td>
          <td className="w-full text-center border-gray-200" >
            <h4 className="whitespace-nowrap font-semibold">
              Nombre de ruta
            </h4>
          </td>
        </tr>
      </tbody>
        </table>
      </section>
      <article className="border-2 border-orange-500 h-full w-4/5"></article>
    </div>
  );
}
