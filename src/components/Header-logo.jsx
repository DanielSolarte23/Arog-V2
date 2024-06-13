import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Header() {
    return (
        <>
            {/* Encabezado*/}
            <header className="w-full h-[14%] flex mt-3">
                {/* contenedor de logo y texto*/}
                <section className="flex w-[35%]">
                    {/* contenedor del logo*/}
                    <article className="w-[19%] ml-24">
                        <img className="w-[87%] object-fit " src="src/images/logoArogNuevo.png" alt="AROG" />
                    </article>
                    {/* contenedor del texto*/}
                    <article className="w-[45%] pl-2 pt-2">
                        <p className="font-semibold text-[20px] text-left leading-5">Asociación de recicladores de oficio <span class=" text-[35px] font-bold">GOLEROS </span></p>
                    </article>
                </section>
                {/* contenedor del menu*/}
                    <nav className=" w-[65%] flex  justify-center">
                        <ul className="flex w-full pt-10 font-semibold text-xl">
                            <li className="ml-12 mr-2"><a href="#">Servicios <span className="p-2">|</span></a></li>
                            <li className=""><a href="#">Nosotros</a></li>
                            <li className=" ml-64"><a href="#">Iniciar sesión <span className="p-2">|</span></a></li>
                            <li><a href="#">Crear cuenta</a></li>
                        </ul>
                    </nav>
                
            </header>

        </>
    )
}
