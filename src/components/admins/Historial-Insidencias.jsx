import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

function Insidencias() {
  return (
    <>
    <div class=" w-72  px-1 py-1 flex  justify-start m-auto h-96  mt-16	">
        <div class="flex w-full items-start gap-4 flex-col  font-semibold mt-5	">
            <button class="text-black font-bold py-2 px-4 rounded h-12 w-60 flex justify-start items-center">
            <i class="fa-solid fa-circle-plus text-4xl mr-2"></i> Añadir Nuevo
            </button>
            <button class="text-black flex   font-bold py-2 px-4 rounded h-12 w-60">Historial de insidencias</button>
        </div>
    </div>
    </>
  );
}

export default Insidencias;

