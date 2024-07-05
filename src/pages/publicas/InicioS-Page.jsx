import React from "react"
import LogoIS from "../../components/publicas/logoIS-Component"
import FormInicio from "../../components/publicas/FormInicioComponent"

export default function InicioSesion (){
    return (
        <div className="sm:p-0 md:pr-14 h-screen w-full md:justify-end flex">
        <LogoIS />
        <FormInicio />
        </div>
    )
}