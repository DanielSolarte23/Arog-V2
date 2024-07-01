import React from "react";
import Contactos from "./Contactos"
import Acerca from "./Acerca";
import Redes from "./Redes";



const Footer = () => {
    return(
        <div className="bg-Cafe-Footer text-white h-72">
            <article className="flex justify-between text-center">
            <Contactos/>
            <section>
            <Acerca/>
            <Redes/>
            </section>
            </article>
            
        </div>
    )
}
export default Footer
