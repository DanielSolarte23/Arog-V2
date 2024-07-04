
import '@fortawesome/fontawesome-free/css/all.min.css';

import "../../styles/publicas/barnav.css"




function Cerrar (){
const barraLateral = document.querySelector('.barra-lateral')
const section = document.querySelector('section');
const spans = document.querySelectorAll('span')
let close = document.getElementById('close')
let open = document.getElementById('open')

    barraLateral.classList.toggle("mini-barra-lateral");
    section.classList.toggle('min-section')
    spans.forEach((span)=>{
        span.classList.toggle("oculto")
    })

    if(barraLateral.classList.contains('mini-barra-lateral')){
        close.style.opacity="1"
        open.style.opacity="0"
    }else{
        close.style.opacity="0"
        open.style.opacity="1"
    }
}

export default function BarraNav() {
    return (
        <section className="barra-lateral flex flex-col  w-[5%] h-4/5 overflow-hidden py-5 shadow-lg" >
            <section className="nombre-pagina w-full h-5 flex justify-center items-center mb-3 pl-2">
            <i id="open" onClick={Cerrar}  className="fa-solid fa-chevron-right hidden text-verde-principal text-2xl"></i>
            <i id="close" onClick={Cerrar} className="fa-solid fa-chevron-left text-verde-principal text-2xl"></i>
            </section>
        <nav className="navegacion h-full overflow-y-auto overflow-x-hidden">
            <ul className="pl-2">
                <li className="flex mb-1">
                    <a className="w-full mt-2 h-4 flex items-center rounded-xl p-3 hover:bg-gray-300 " href="">
                        <i className="fa-solid fa-route min-w-12 text-2xl m-0 p-0 -mr-4 text-verde-principal"></i>
                        <span className="e text-sm font-medium opacity-0 whitespace-nowrap w-24 ">Gestion de rutas</span>
                    </a>
                </li>
                <li className="flex mb-1">
                    <a className="w-full mt-2 h-4 flex items-center rounded-xl p-3 hover:bg-gray-300 " href="">
                        <i className="fa-solid fa-list-check min-w-12 text-2xl m-0 p-0 -mr-4 text-verde-principal"></i>
                        <span className="e text-sm font-medium opacity-0 whitespace-nowrap w-24 ">Asignacion de tareas</span>
                    </a>
                </li>
                <li className="flex mb-1">
                    <a className="w-full mt-2 h-4 flex items-center rounded-xl p-3 hover:bg-gray-300 " href="">
                        <i className="fa-solid fa-users min-w-12 text-2xl m-0 p-0 -mr-4 text-verde-principal"></i>
                        <span className="e text-sm font-medium opacity-0 whitespace-nowrap w-24 ">Gestion de usuarios</span>
                    </a>
                </li>
                <li className="flex mb-1">
                    <a className="w-full mt-2 h-4 flex items-center rounded-xl p-3 hover:bg-gray-300 " href="">
                        <i className="fa-solid fa-book-open min-w-12 text-2xl m-0 p-0 -mr-4 text-verde-principal"></i>
                        <span className="e text-sm font-medium opacity-0 whitespace-nowrap w-24 ">Gestion de datos</span>
                    </a>
                </li>
                <li className="flex mb-1">
                    <a className="w-full mt-2 h-4 flex items-center rounded-xl p-3 hover:bg-gray-300 " href="">
                        <i className="fa-solid fa-cash-register min-w-12 text-2xl m-0 p-0 -mr-4 text-verde-principal"></i>
                        <span className="e text-sm font-medium opacity-0 whitespace-nowrap w-24 ">Pagos</span>
                    </a>
                </li>
                <li className="flex mb-1">
                    <a className="w-full mt-2 h-4 flex items-center rounded-xl p-3 hover:bg-gray-300 " href="">
                        <i className="fa-solid fa-circle-exclamation min-w-12 text-2xl m-0 p-0 -mr-4 text-verde-principal"></i>
                        <span className="e text-sm font-medium opacity-0 whitespace-nowrap w-24 ">Registro incidencias</span>
                    </a>
                </li>
                <li className="flex mb-1">
                    <a className="w-full mt-2 h-4 flex items-center rounded-xl p-3 hover:bg-gray-300 " href="">
                        <i className="fa-solid fa-chart-simple min-w-12 text-2xl m-0 p-0 -mr-4 text-verde-principal"></i>
                        <span className="e text-sm font-medium opacity-0 whitespace-nowrap w-24 ">Estadisticas y metricas</span>
                    </a>
                </li>
                <li className="flex mb-1">
                    <a className="w-full mt-2 h-4 flex items-center rounded-xl p-3 hover:bg-gray-300 " href="">
                        <i className="fa-solid fa-clipboard-list min-w-12 text-2xl m-0 p-0 -mr-4 text-verde-principal"></i>
                        <span className="e text-sm font-medium opacity-0 whitespace-nowrap w-24 ">Historial de registro</span>
                    </a>
                </li>
                <li className="flex mb-1">
                    <a className="w-full mt-2 h-4 flex items-center rounded-xl p-3 hover:bg-gray-300 " href="">
                        <i className="fa-solid fa-file-invoice min-w-12 text-2xl m-0 p-0 -mr-4 text-verde-principal"></i>
                        <span className="e text-sm font-medium opacity-0 whitespace-nowrap w-24 ">Informes y certificados</span>
                    </a>
                </li>
                <li className="flex -ml-1 mb-1">
                    <a className="w-full mt-2 h-4 flex items-center rounded-xl p-3 hover:bg-gray-300 "  href="">
                        <i className="fa-solid fa-images min-w-12 text-2xl m-0 p-0 -mr-4 text-verde-principal"></i>
                        <span className="e text-sm font-medium opacity-0 whitespace-nowrap w-24 ">Registro fotografico</span>
                    </a>
                </li>
                
            </ul>
            <div className="ml-2 mt-4 w-4/5 h-[2px] bg-gray-200"></div>
            <li className="flex pl-2 mb-1 mt-4">
                    <a className="w-full mt-2 h-4 flex items-center rounded-xl p-3 text-red-700 hover:bg-gray-300 "  href="">
                        <i className="fa-solid fa-right-from-bracket min-w-12 text-2xl m-0 p-0 -mr-4"></i>
                        <span className="e text-sm font-medium opacity-0 whitespace-nowrap w-24 ">Cerrar sesión</span>
                    </a>
            </li>
        </nav>
    </section>
    )
}

 {/* <nav id="Nav"  className="w-1/5  h-4/5 fixed flex flex-col justify-center items-center  shadow-lg overflow-hidden">
            <div className="flecha w-4/5 flex justify-end ">
            <i id="open" onClick={AbrirNav} className="fa-solid fa-chevron-right  text-verde-principal text-2xl"></i>
            <i id="close" onClick={CerrarNav} className="fa-solid fa-chevron-left text-verde-principal text-2xl"></i>
            </div>
            <ul className=" w-10/12  h-3/4 flex flex-col justify-around font-light text-xl">
                <li className="group flex items-center gap-3 p-1 hover:p-1 rounded-xl hover:bg-verde-principal hover:text-white">
                    <i className="fa-solid fa-road text-verde-principal text-2xl group-hover:text-white"></i>
                    <p className="whitespace-nowrap">Gestion de Rutas</p>
                </li>
                <li className="group flex items-center gap-3 p-1 hover:p-1 rounded-xl hover:bg-verde-principal hover:text-white"><i className="fa-solid fa-cash-register text-verde-principal text-2xl group-hover:text-white"></i><p className="whitespace-nowrap"> Historial de registro</p></li>
                <li className="group flex items-center gap-3 p-1 hover:p-1 rounded-xl hover:bg-verde-principal hover:text-white"><i className="fa-solid fa-table-list text-verde-principal text-2xl group-hover:text-white"></i><p className="whitespace-nowrap">Registro de datos</p></li>
                <li className="group flex items-center gap-3 p-1 hover:p-1 rounded-xl hover:bg-verde-principal hover:text-white"><i className="fa-solid fa-list text-verde-principal text-2xl group-hover:text-white"></i><p className="whitespace-nowrap">Gestion de tareas</p></li>
                <li className="group flex items-center gap-3 p-1 hover:p-1 rounded-xl hover:bg-verde-principal hover:text-white"><i className="fa-solid fa-chart-simple text-verde-principal text-2xl group-hover:text-white"></i><p className="whitespace-nowrap">Estadisticas</p></li>
                <li className="group flex items-center gap-3 p-1 hover:p-1 rounded-xl hover:bg-verde-principal hover:text-white"><i className="fa-solid fa-users text-verde-principal text-2xl group-hover:text-white"></i><p className="whitespace-nowrap">Permisos</p></li>
                <li className="group flex items-center gap-3 p-1 hover:p-1 rounded-xl hover:bg-verde-principal hover:text-white"><i className="fa-solid fa-circle-exclamation text-verde-principal text-2xl group-hover:text-white"></i><p className="whitespace-nowrap">Registro Incidencias</p></li>
                <li className="group flex items-center gap-3 p-1 hover:p-1 rounded-xl hover:bg-verde-principal hover:text-white"><i className="fa-solid fa-wallet text-verde-principal text-2xl group-hover:text-white"></i><p className="whitespace-nowrap">Pagos</p></li>
                <li className="group flex items-center gap-3 p-1 hover:p-1 rounded-xl hover:bg-verde-principal hover:text-white"><i className="fa-solid fa-images text-verde-principal text-2xl group-hover:text-white"></i><p className="whitespace-nowrap">Galeria</p></li>
            </ul>
        </nav> */}