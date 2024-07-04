import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Footer() {
    return (
        
        <footer className=" flex w-full h-[10%]  items-start pl-8">
            {/* contenedor de redes sociales */}
        <i className="fa-brands fa-facebook text-5xl pl-3 pr-6 text-black"></i> 
        <i className="fa-brands fa-instagram text-5xl pr-6 text-black"></i>
        <i className="fa-brands fa-tiktok text-5xl pr-6 text-black"></i>
        <i className="fa-brands fa-whatsapp text-5xl text-black"></i>
        </footer>
        
    )
}

