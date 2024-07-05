import React from "react"
import LogoIS from "../../components/publicas/logoIS-Component"
import FormRegistro from "../../components/publicas/FormRegistroComponent"

export default function Registro (){
    return (
        <div className="h-screen w-full flex">
        <LogoIS />
        <FormRegistro />
        </div>
    )
}