import React from "react";
import '../styles/inicioSesion.css'
import '@fortawesome/fontawesome-free/css/all.min.css';

export default function FormRegistro() {
    return (
        <div className="w-1/2 h-full  flex flex-col">
            <h1 className="bienv h-[15%] -mb-10 flex items-center justify-center text-4xl">Registro</h1>
            <form className="flex flex-col w-full h-[95%] pr-7  justify-evenly items-center"><br />
                <div className="relative w-3/4 h-14"><input className="pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2" type="text" placeholder="Nombre Completo"></input>
                    <i className="fa-solid fa-signature absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-verde-principal"></i>
                </div>
                <div className="relative w-3/4 h-14"><input className="pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2" type="password" placeholder="Contraseña"></input>
                    <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-verde-principal"></i>
                </div>
                <div className="relative w-3/4 h-14"><input className="pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2" type="password" placeholder="Confirmar contraseña"></input>
                    <i className="fa-solid fa-lock absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-verde-principal"></i>
                </div>
                <div className="relative w-3/4 h-14"><input className="pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2" type="text" placeholder="Documento de identidad"></input>
                    <i className="fa-solid fa-id-card absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-verde-principal"></i>
                </div>
                <div className="w-3/4 h-28 flex">
                    <section className="w-2/3 h-full">
                        <div className="relative w-full h-14">
                            <input className="pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2 text-gray-400" type="date"></input>
                            <i className="fa-solid fa-calendar-day absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-verde-principal"></i>
                        </div>
                        <div className="relative w-full h-14"><input className="pl-12 border-b-4 w-full h-full focus:border-b-4  focus:border-verde-principal focus:outline-none text-xl  hover:border-verde-principal bt2" type="text" placeholder="Telefono"></input>
                            <i className="fa-solid fa-phone absolute left-3 top-1/2 transform -translate-y-1/2 text-2xl text-verde-principal"></i>
                        </div>
                    </section>
                    <article className="w-1/3 h-full flex flex-col  items-center">
                        <label className="text-2xl text-gray-400">Genero</label>
                        <div className="flex  w-full h-full justify-evenly items-center">
                            <button className="bg-verde-principal rounded-full h-10 w-10 text-white font-bold text-xl hover:bg-gray-300 hover:text-verde-principal bt">M</button>
                            <button className="bg-gray-300 rounded-full h-10 w-10 text-verde-principal font-bold text-xl hover:bg-verde-principal hover:text-gray-300 bt">F</button>
                        </div>

                    </article>
                </div>
                <div className="w-3/4 h-14 flex gap-3"> 
                    <button className="bg-gray-300 w-3/4 p-3 text-3xl font-semibold text-verde-principal rounded-full -mb-1 hover:bg-red-200 bt">Cancelar</button>
                    <button className="bg-verde-principal w-3/4 p-3 text-3xl font-semibold text-white rounded-full -mb-1 hover:bg-gray-200 hover:text-verde-principal bt">Iniciar sesión</button>
                </div>
                <button className="bg-gray-200 w-3/4 p-2 text-3xl transition-opacity text-black rounded-full flex items-center gap-10"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEkUlEQVR4nO2Zb0wbZRzHn3taesUtRpOJYbo/DoQM5c/GMgryzxkYxbGBiQsbNBCEFGaIY8zCCuaUMSiQAQMGQWAgcSY2GeuNuzpc8NqNvRoCItE3841Dthj3ToNzbX+mVRBI197Zo2VJv8n3XZ+nn89dn6dPrwj5448/HgcoJIWqgGIoxywU4HuQTfwJSsIKBxBAKgJIQzbIJhZBhX+BE/g6VAUU2ccgXwc0UgWU4tvwNmGBJASCqiQsoMa3QRsQ433wOlk4qPEsvCkQ2llTEUAxnoEaFOIdeA3RCumEzWPwtT2IrHCK0K0f+HkUCMX4B9HBk9b0PTwNFJKJC9+NngcVfrDu8En/toJoFw9+EMnhOPGr1+DLCE40eIeAGn/vPXgsMvyHRIfgrbEMT0IlroUmaQpQaAtQKAjOSN6C05hy7Db21zgbW4pN4sI3kyGQQVh5g5+W9PJZfEChZ+ADydAqkVKR4R1vVIHv8IIvwPNwDr0oeP4aFAJ5+P76wJvl22CcfAQaCUCyC/gSPAV6JEEbLWAmdWAmwdHeAIB0wvmV35DweiQBs2x+WcDeURmACv8Hn0lYoAK9hDZiwCSPXwW/VI4E0En/ObuclPSjjRowybROBZY6FPAAyhGJNmrATF5xKWCSdQiZL1gzC2I0XDthO9rUd9e9gImccynAkRm+EAjWzMIbddcW+Qg8dCMQ6iuB3TW3rHwEHrkWQJt9JbCjehKeaoHtVd+C5x+hm7IwXwns1t60Pd2L+JNRHovYTI642UY7fSVwRDc8z0NAduZJ8A+5Z6Geif/jvF4RiEROy3D+puiPvrG4Eii/0DjqXoALVDiDnx0PBhWthENXs6HDGHtJbIGTnfX97u6Arq/iuHsBQBjMsntL4DYzCfRYOGQbDjvg7c2jlZaL11/bJhZ8W496Z2SNyeoK/vVas4XiKH5P88BENtrhfzdthrNMwjL4ylaPJi9wXIrHjwcpjpIeafxswd3VL2lrm+A9KXCBL98df+GvEjrdKfxSP2YTZjyRoDhKmt/SM+d2/6+egsbuylhBkzcwihlX8CvvRP/X4VuFwvfeiNhe1lX3E5/d51hz75zQ+RE9FvZKPq208pHIp5WWzq/2DlCDKXJ38w6PRW1qZ/b15RmU1pyRHDja2uH2FEp9ekrQl+dyutmY1iweAitFGljFdJdxL6VnIw5cGdsVdJkL2zJgjEq8aNxTV8ckTNpfs3JM1kgOFPZQsLXqO6cC77c3dSNPomPjpvkKeNKiwXLYWX1nFfy7TQM/Ik+j10fINHTqfW9IFH5RCJG1Jgd8ev2Xv53o6hJ0cHxiOG7HczVM4oI3JI7pc0HVemGeGq4MEgV+hYT8LBM/K2RN/J+eYxXTRmPo+v3m7jNGNecaMq2iX3lDprWXjWlG3sgwvSe0gY2beseQ5TF4ztXDjqt++caru5C3MzQWGdvM7L9VZDj4WCh4AZ3xuJGJm/icifb+n3xrowck6WeiC1uN+0a1TOLPajptUWVQWu13yH4IzDVk2tSGtMWqa8nzLex+ts8YU2Afg/zxxx/kaf4GzSVnCicBYF0AAAAASUVORK5CYII=" />
                    Continuar con google</button>
            </form>
        </div>
    )
}