import React from "react"
import LogoIS from "../../components/publicas/logoIS-Component"
import FormInicio from "../../components/publicas/FormInicioComponent"

export default function InicioSesion (){
    return (
        <div className="h-screen w-full flex">
        <LogoIS />
        <FormInicio />
        </div>
    )
}