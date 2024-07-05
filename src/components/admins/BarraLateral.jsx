import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/publicas/barralateral.css";
import { Link } from "react-router-dom";

export default function BarraLateral() {
  function DropDown() {
    // Funcion de la barra multi opcion
    document.querySelector("#submenu").classList.toggle("hidden");
    //Rotacion del icono de la barra co nmultiples opciones
    document.querySelector("#arrow").classList.toggle("rotate-0");
  }
  function DropDownEstadisticas() {
    document.querySelector("#submenu2").classList.toggle("hidden");
    document.querySelector("#arrow2").classList.toggle("rotate-0");
  }

  //Funcion de apertura y cierre de la barra lateral
  function Open() {
    document.querySelector(".sidebar").classList.toggle("left-[-350px]");
  }

  return (
    <>
      {/* boton para abrir la barra lateral */}
      <span
        onClick={Open}
        className="absolute hover:animate-pulse text-white text-3xl top-[90px] left-4 cursor-pointer"
      >
        <i className="fa-solid fa-circle-chevron-right text-gray-900 rounded-md"></i>
      </span>
      {/* Barra lateral */}
      <div className="sidebar shadow-xl h-[88%] scrollbar  fixed  bottom-0  xl:left-0  left-[-350px] p-2 w-[250px] overflow-y-auto text-center bg-white transition-all duration-700">
        <div className="text-gray-900 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-end">
            {/* Boton de cerrado barra lateral */}
            <i
              className="fa-solid fa-xmark ml-20 cursor-pointer lg:hidden"
              onClick={Open}
            ></i>
          </div>
          {/* linea divisoria */}
          <hr className="my-2 text-gray-900" />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-100 text-gray-900">
          <i className="fa-solid fa-magnifying-glass text-base"></i>
          <input
            type="text"
            placeholder="Buscar"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        {/*Opcion Getion de rutas  */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900">
          <Link to="Rutas">
            <i className="fa-solid fa-route"></i>
            <span className="text-[15px] ml-4 text-gray-900">
              Gestion de rutas{" "}
            </span>
          </Link>
        </div>
        {/* Asignacion de tareas */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900">
          <Link to="Tareas">
          <i className="fa-solid fa-list-check"></i>
          <span className="text-[15px] ml-4 text-gray-900">
            Asignacion de tareas
          </span>
          </Link>
        </div>
        {/* Gestion de usuarios */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900">
          <i className="fa-solid fa-users"></i>
          <span className="text-[15px] ml-4 text-gray-900">
            Gestion de usuarios
          </span>
        </div>
        {/* Pagos */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900">
          <i className="fa-solid fa-sack-dollar"></i>
          <span className="text-[15px] ml-4 text-gray-900">Pagos</span>
        </div>
        {/* Registro de incidencias */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900">
          <i className="fa-solid fa-circle-exclamation"></i>
          <span className="text-[15px] ml-4 text-gray-900">
            Registro incidencias
          </span>
        </div>
        {/* Estadisticas y metricas */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900">
          <i className="fa-solid fa-chart-simple"></i>
          <span className="text-[15px] ml-2 whitespace-nowrap text-gray-900">
            Estadisticas y metricas
          </span>
        </div>
        {/* Historial de registro */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900">
          <i className="fa-solid fa-clock"></i>
          <span className="text-[15px] ml-4 text-gray-900">
            Historial de Registro
          </span>
        </div>
        {/* Informes y certificados */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900">
          <i className="fa-solid fa-file-circle-check"></i>
          <span className="text-[15px] ml-2 whitespace-nowrap text-gray-900">
            Informes y certificados
          </span>
        </div>
        {/* Registro fotografico */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900">
          <i className="fa-solid fa-image"></i>
          <span className="text-[15px] ml-4 text-gray-900">
            Registro fotografico
          </span>
        </div>

        {/* linea divisora */}
        <hr className="my-4 text-gray-500" />
        {/* Multiopcion */}
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900"
          onClick={DropDown}
        >
          <i className="fa-solid fa-file-lines"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-1 text-gray-900">
              Formatos de registro
            </span>
            <span
              className="text-sm rotate-180 transition-transform duration-100"
              id="arrow"
            >
              <i className="fa-solid fa-chevron-up"></i>
            </span>
          </div>
        </div>
        <div
          className="text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-900 hidden transition-all duration-300"
          id="submenu"
        >
          {/* Opciones del submenu */}
          <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
            Registro de recoleccion <br /> en fuentes
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
            Formato registro <br /> operativo en ruta
          </h1>
        </div>

        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900"
          onClick={DropDownEstadisticas}
        >
          <i className="fa-solid fa-file-circle-check"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[14px]  text-gray-900">
              Informes y certificados
            </span>
            <span
              className="text-sm rotate-180 transition-transform duration-100"
              id="arrow2"
            >
              <i className="fa-solid fa-chevron-up"></i>
            </span>
          </div>
        </div>
        <div
          className="text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-900 hidden transition-all duration-300"
          id="submenu2"
        >
          {/* Opciones del submenu */}
          <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
            Informes
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
            Certificados
          </h1>
        </div>

        {/* Cerrar sesion */}
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-200 text-white">
          <i className="fa-solid fa-right-from-bracket text-red-600"></i>
          <span className="text-[15px] ml-4 text-red-600">Cerrar</span>
        </div>
      </div>
    </>
  );
}
