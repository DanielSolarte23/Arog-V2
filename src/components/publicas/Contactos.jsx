import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEnvelope, faLocationDot, faPhone} from '@fortawesome/free-solid-svg-icons'


const Contactos = () => {
    return(
        <div className="font-lexend h-50 w-1/2 m-7">
            <article className="p-4">
                <section className="flex items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="text-4xl hover:text-green-700 cursor-pointer m-2"/>
                    <div className="flex-col ml-2">
                        <h2>Calle 55 #025-26</h2>
                        <h2>Popayan(Cauca)</h2>
                    </div>
                </section>
            </article>
            <article className="p-4">
                <section className="flex items-center">
                    <FontAwesomeIcon icon={faPhone} className="text-4xl hover:text-green-700 cursor-pointer m-2"/>
                    <div>
                        <h2>+57 3145688996</h2>
                        <h2>0180005966336</h2>
                    </div>
                </section>
            </article>
            <div className="flex p-4">
                <FontAwesomeIcon icon={faEnvelope} className="text-4xl hover:text-green-700 cursor-pointer m-2"/>
                <h2>Asociaciongolero@gmail.com</h2>
            </div>
        </div>
    )
}


export default Contactos