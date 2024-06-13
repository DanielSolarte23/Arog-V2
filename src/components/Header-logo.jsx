import React from "react"


export default function Header() {
    return (
        <>
        {/* Encabezado*/}
        <header className="w-full h-[20%] flex justify-around bg-blue-200">
            {/* contenedor del logo y texto*/}
            <section className="w-80 bg-blue-400">
                <img src="src/images/logoArogNuevo.png" alt="AROG"/>
                <p>Asociación de recicladores de oficio GOLEROS </p>
            </section>
            <section>
                <nav>
                    <ul>
                        <li><a href="#">Servicios</a></li>
                        <li><a href="#">Nosotros</a></li>
                        <li><a href="#">Iniciar sesión</a></li>
                        <li><a href="#">Crear cuenta</a></li>
                    </ul>
                </nav>
            </section>
        </header>
       
        </>
    )
}
