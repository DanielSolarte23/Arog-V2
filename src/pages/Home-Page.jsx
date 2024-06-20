import React from "react"
/* Here we export the components that will contain the page*/
import Header from "../components/Header-logo"
import Bienvenida from "../components/Bienvenida-img"
import Footer from "../components/Footer-icons"


export default function HomePagina (){
    return (
        <div className="h-screen w-full">
        <Header />
        <Bienvenida />
        <Footer />
        </div>
    )
}
