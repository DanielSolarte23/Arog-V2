import React from "react"
/* Here we export the components that will contain the page*/
<<<<<<< HEAD
import Header from "../../components/Header-logo"
import Bienvenida from "../../components/Bienvenida-img"
import Footer from "../../components/Footer-icons"

=======
import Header from "../../components//publicas/Header-logo"
import Bienvenida from "../../components/publicas/Bienvenida-img"
import Footer from "../../components/publicas/Footer-icons"
import "../styles/homePage.css"
>>>>>>> kathe

export default function HomePagina (){
    return (
        <div className="h-screen w-full">
        <Header />
        <Bienvenida />
        <Footer />
        </div>
    )
}
