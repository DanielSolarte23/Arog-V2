import React from "react";
import '@fortawesome/fontawesome-free/css/all.min.css';



function Certificados() {
    return (
        <>
     <div className="flex flex-row gap-4 flex-col items-center pt-32 font-semibold">
      <button className="bg-Gris hover:bg-verde-principal transition-all hover:text-white text-black font-bold py-2 px-4 rounded h-12 w-60">Generar Certificado</button>
      <button className="bg-Gris hover:bg-verde-principal transition-all hover:text-white text-black font-bold py-2 px-4 rounded  h-12 w-60">Generar Informe</button>
      <button className=" text-black  font-bold py-2 px-4 rounded  h-12 w-60">Descargar PDF <i class="fa-solid fa-file-arrow-down pl-2"></i></button>
    </div>
        </>
    );
}

export default Certificados;



