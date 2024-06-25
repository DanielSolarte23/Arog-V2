import React from "react"
/* Here we export the components that will contain the page*/
import Header from "../../components//publicas/Header-logo"
import Bienvenida from "../../components/publicas/Bienvenida-img"
import Footer from "../../components/publicas/Footer-icons"
import "../styles/homePage.css"

export default function HomePagina (){
    return (
        <div className="h-screen w-full">
        <Header />
        <Bienvenida />
        <Footer />
        </div>
    )
}
