import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Footer() {
    return (
        
        <footer className=" flex w-full h-[17%] items-center pl-8">
            {/* contenedor de redes sociales */}
        <i class="fa-brands fa-facebook text-5xl pl-3 pr-6 text-black"></i> 
        <i class="fa-brands fa-instagram text-5xl pr-6 text-black"></i>
        <i class="fa-brands fa-tiktok text-5xl pr-6 text-black"></i>
        <i class="fa-brands fa-whatsapp text-5xl text-black"></i>
        </footer>
        
    )
}

