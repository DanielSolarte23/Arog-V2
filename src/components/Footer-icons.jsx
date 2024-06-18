import React from "react"
import '@fortawesome/fontawesome-free/css/all.min.css';



export default function Footer() {
    return (
        <>
        {/* contenedor de redes sociales */}
        <footer className=" flex w-full h-24 mt-5 pt-4 pl-6">
        <i class="fa-brands fa-facebook text-6xl pl-3 pr-6 text-yellow-950"></i> 
        <i class="fa-brands fa-instagram text-6xl pr-6 text-yellow-950"></i>
        <i class="fa-brands fa-tiktok text-6xl pr-6 text-yellow-950"></i>
        <i class="fa-brands fa-whatsapp text-6xl text-yellow-950"></i>
        </footer>
        </>
    )
}
