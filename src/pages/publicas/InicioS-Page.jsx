import React from "react"
import LogoIS from "../components/logoIS-Component"
import FormInicio from "../components/FormInicioComponent"

export default function InicioSesion (){
    return (
        <div className="h-screen w-full flex">
        <LogoIS />
        <FormInicio />
        </div>
    )
}