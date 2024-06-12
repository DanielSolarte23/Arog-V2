import React from "react"


export default function Header() {
    return (
        <>
        {/* Encabezado*/}
        <header>
            {/* contenedor del logo y texto*/}
            <section>
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
