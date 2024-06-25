
import React from "react"
import imagen from '../images/imagenVenta.jpg'
import foto from '../images/imagenRecoleccion.jpg'
import fotis from '../images/imagenEstudioi.jpg'


function Pagina() {
    return (
        <>



            <section className=" flex-col flex items-center	bg-yellow-800 h-screen justify-center">
                <article>
                    <h1 className=" text-center text-3xl font-semibold">NUESTROS SERVICIOS</h1>
                </article>



                <section className="	h-1/2	 w-full border-slate-950 flex my-px	mb-14 justify-center	">

                    <article className="space-y-2.5 border-2 border-black rounded m-1		justify-center	ml-12  w-96	">
                        <img className="flex  justify-center h-56 w-60	rounded-full ml-16  mt-3	" src={imagen} alt="imagen" />
                        <h2 className=" text-3xl text-center	font-semibold	">Recoleccion</h2>
                        <p className="text-left   text-xl p-9 pt-1	font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt delectus </p>
                    </article>





                    <article className="space-y-2.5 border-2 border-black rounded m-1		justify-center	ml-12  w-96	">
                        <img className="flex  justify-center h-56 w-60	rounded-full ml-16  mt-3	" src={foto} alt="imagen" />
                        <h2 className=" text-3xl text-center	font-semibold	">Recoleccion</h2>
                        <p className="text-left text-xl  p-9 pt-1	font-semibold">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt delectus </p>
                    </article>



                    <article className="space-y-2.5 border-2 border-black rounded m-1		justify-center	ml-12  w-96	">
                        <img className="flex  justify-center h-56 w-60	rounded-full ml-16  mt-3	" src={fotis} alt="imagen" />
                        <h2 className=" text-3xl text-center	font-semibold	">Recoleccion</h2>
                        <p className="text-left text-xl  p-9 pt-1 font-semibold	">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo fugit possimus reiciendis at deleniti quia nihil ut? Nesciunt delectus </p>
                    </article>

                </section>




            </section>


        </>
    )
}

export default Pagina;