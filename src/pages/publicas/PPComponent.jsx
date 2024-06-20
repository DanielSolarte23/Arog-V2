import React from "react";
import LogoArog from "../images/logoArogText.svg"
import '@fortawesome/fontawesome-free/css/all.min.css';
import BarraNav from "../components/BarrNavComponent";

export default function PPage() {
    return (
        <main className="w-full h-screen box-border m-0 ">
            <header className="w-full h-1/5 flex items-center justify-between px-6">
                <img className="h-2/3" src={LogoArog} />
                <div className="w-2/5 h-1/3 relative">
                    <input className="w-full h-full rounded-full bg-gray-200 pl-10 text-xl font-medium text-gray-900 focus:outline-none focus:font-medium focus:text-xl  flex items-center" type="text">
                    </input>
                    <i className="fa-solid fa-magnifying-glass absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-600 text-xl"></i>
                </div>
                <div className="h-1/3 flex items-center gap-5 ">
                    <i className="fa-regular fa-bell text-2xl text-gray-400 hover:text-verde-principal"></i>
                    <i className="fa-regular fa-circle-question text-2xl text-gray-400 hover:text-verde-principal"></i>
                </div>
                <div className="flex h-1/3  items-center gap-2">
                    <p className="text-lg font-medium text-gray-600">Maja Sanchez</p>
                    <i className="fa-solid fa-user-large text-white bg-verde-principal p-4 rounded-full"></i>
                </div>
            </header>
            <BarraNav />
            
        </main>
    )
}