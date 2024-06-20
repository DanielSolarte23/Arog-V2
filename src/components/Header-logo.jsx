import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Header() {
    return (
        <>
            {/* Encabezado*/}
            <header className=" sm:bg-slate-200 w-screen h-[14%] flex mt-2 ">
                {/* contenedor de logo y texto*/}
                <section className="sm: flex w-[70%] bg-slate-500">
                    {/* contenedor del logo*/}
                    <article className="sm: w-[40%] ml-3 bg-slate-400">
                        <img className="sm: w-[80%] ml-3 object-fit " src="src/images/logoArogNuevo.png" alt="AROG" />
                    </article>
                    {/* contenedor del texto*/}
                    <article className="sm:w-[50%] pl-2 pt-2 bg-slate-300">
                        <p className="font-semibold text-[15px] text-left leading-5">Asociación de recicladores de oficio <span class="sm: text-[29px] font-bold">GOLEROS </span></p>
                    </article>
                </section>
                {/* contenedor del menu*/}
                     <nav className="sm: ml-3 w-[80%] flex  justify-center bg-slate-600">
                        <ul className="sm: flex w-full pt-9 font-semibold text-lg bg-slate-300">
                            <li className="sm: ml-3 mr-1"><a href="#">Servicios <span className="p-2">|</span></a></li>
                            <li className=""><a href="#">Nosotros</a></li>
                            <li className="sm: ml-3"><a href="#">Iniciar sesión <span className="p-2">|</span></a></li>
                            <li><a href="#">Crear cuenta</a></li>
                        </ul>
                    </nav>  


                
            </header>

        </>
    )
}


