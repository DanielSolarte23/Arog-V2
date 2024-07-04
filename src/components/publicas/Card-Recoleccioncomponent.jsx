import React from "react";
import imagen from "../../images/imagenVenta.jpg";
import foto from "../../images/imagenRecoleccion.jpg";
import fotis from "../../images/imagenEstudioi.jpg";

export default function Pagina() {
  return (
    <>
      <section
        id="Servicios"
        className=" flex-col flex items-center h-screen justify-end"
      >
        <article>
          <h1 className=" mb-4 text-center text-3xl font-semibold">
            NUESTROS SERVICIOS
          </h1>
        </article>
        <section className=" h-3/4 w-full flex justify-center">
          <article className="space-y-2.5 w-1/3 flex flex-col justify-evenly items-center ">
            <img
              className="flex justify-center h-56 w-56	rounded-full border-4 border-verde-principal  mt-3	"
              src={imagen}
              alt="imagen"
            />
            <h2 className=" text-3xl text-center	font-semibold	">Recoleccion</h2>
            <p className="text-justify   text-xl p-9 pt-1	font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt
              delectus{" "}
            </p>
          </article>
          <article className="space-y-2.5 w-1/3 flex flex-col justify-evenly items-center ">
            <img
              className="flex justify-center h-56 w-56	rounded-full border-4 border-verde-principal mt-3"
              src={foto}
              alt="imagen"
            />
            <h2 className=" text-3xl text-center	font-semibold	">Recoleccion</h2>
            <p className="text-justify text-xl  p-9 pt-1	font-semibold">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt
              delectus{" "}
            </p>
          </article>
          <article className="space-y-2.5 w-1/3 flex flex-col justify-evenly items-center ">
            <img
              className="flex justify-center h-56 w-56	rounded-full border-4 border-verde-principal  mt-3"
              src={fotis}
              alt="imagen"
            />
            <h2 className=" text-3xl text-center	font-semibold	">Recoleccion</h2>
            <p className="text-justify text-xl  p-9 pt-1 font-semibold	">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt
              delectus{" "}
            </p>
          </article>
        </section>
      </section>
    </>
  );
}
