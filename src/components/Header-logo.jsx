import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';


export default function Header() {
    return (
        <>
            {/* Encabezado*/}
            <header className=" sm:w-screen h-[14%] flex mt-2 md:w-screen h-[15%] flex mt-2 lg:mt-4 xl:h-[15%]">
                {/* contenedor de logo y texto*/}
                <section className="sm: flex w-[70%] bg-slate-500 md: lg:bg-transparent w-[45%] xl:w-[40%]">
                    {/* contenedor del logo*/}
                    <article className="sm:w-[40%] ml-3 bg-slate-400 md:w-[35%] lg:bg-transparent w-[32%] xl:w-[30%]">
                        <img className="sm:w-[80%] ml-3 object-fit md:w-[80%] lg:w-[83%] xl:w-[70%] ml-8" src="src/images/logoArogNuevo.png" alt="AROG" />
                    </article>
                    {/* contenedor del texto*/}
                    <article className="sm:w-[56%] pl- pt-1 bg-slate-300 md:w-[62%] pt-5 p-2 lg:bg-transparent w-[60%] pt-7 p-1 xl: pt-3 ">
                        <p className="sm:font-semibold text-[15px] text-left leading-5 md:text-[21px]">Asociación de recicladores de oficio <span class="sm: text-[29px] font-bold">GOLEROS </span></p>
                    </article>
                </section>
                {/* contenedor del menu*/}
                     <nav className="sm: ml-3 w-[80%] flex  justify-center bg-slate-800 lg:bg-transparent w-[82%] ml-0">
                        <ul className="sm: flex w-full pt-9 font-semibold text-lg bg-slate-400 lg:bg-transparent pt-11 text-[20px]">
                            <li className="sm: ml-3 mr-1 lg:ml-12"><a href="#">Servicios <span className="p-2 lg:pl-1">|</span></a></li>
                            <li className="lg: mr-28 xl:mr-80"><a href="#">Nosotros</a></li>
                            <li className="sm: ml-3"><a href="#">Iniciar sesión <span className="p-2 lg:pl-1">|</span></a></li>
                            <li><a href="#">Crear cuenta</a></li>
                        </ul>
                    </nav>  


                
            </header>

        </>
    )
}


