import React from "react";
import imagen from '../../images/imagenVenta.jpg';
import foto from '../../images/imagenRecoleccion.jpg';
import fotis from '../../images/imagenEstudioi.jpg';


function Pagina() {
    return (
        <>
            <section className="flex flex-col items-center justify-center min-h-screen mt-20">
                <article>
                    <h1 className="text-center text-3xl font-semibold">NUESTROS SERVICIOS</h1>
                </article>

                <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-10 w-full max-w-7xl mx-auto">
                    <article className="space-y-2.5 border-2 border-black rounded p-4 m-1 justify-center">
                        <img className="h-56 w-56 object-cover rounded-full mx-auto" src={imagen} alt="imagen" />
                        <h2 className="text-2xl font-semibold text-center">Recoleccion</h2>
                        <p className="text-lg font-semibold mt-2 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt delectus</p>
                    </article>

                    <article className="space-y-2.5 border-2 border-black rounded p-4 m-1 justify-center">
                        <img className="h-56 w-56 object-cover rounded-full mx-auto" src={foto} alt="foto" />
                        <h2 className="text-2xl font-semibold text-center">Recoleccion</h2>
                        <p className="text-lg font-semibold mt-2 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt delectus</p>
                    </article>

                    <article className="space-y-2.5 border-2 border-black rounded p-4 m-1 justify-center">
                        <img className="h-56 w-56 object-cover rounded-full mx-auto" src={fotis} alt="fotis" />
                        <h2 className="text-2xl font-semibold text-center">Recoleccion</h2>
                        <p className="text-lg font-semibold mt-2 text-center">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt delectus</p>
                    </article>
                </section>
            </section>
        </>
    );
}

export default Pagina;
