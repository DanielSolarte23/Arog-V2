import "@fortawesome/fontawesome-free/css/all.min.css";
import Logo from "../../images/logoArogNuevo.png"

export default function BarraLateral() {
  function DropDown() {
    document.querySelector("#submenu").classList.toggle("hidden");
    document.querySelector("#arrow").classList.toggle("rotate-0");
  }

  function Open() {
    document.querySelector(".sidebar").classList.toggle("left-[-250px]");
  }

  return (
    <>
      <span
        onClick={Open}
        className="absolute text-white text-3xl top-5 left-4 cursor-pointer"
      >
        <i className="fa-solid fa-circle-chevron-right text-gray-900 rounded-md"></i>
      </span>
      <div className="sidebar shadow-xl fixed top-0 bottom-0 xl:left-0 left-[-250px] p-2 w-[250px] overflow-y-auto text-center bg-white transition-all duration-700">
        <div className="text-gray-900 text-xl">
          <div className="p-2.5 mt-1 flex items-center justify-between">
            <div className="flex items-center">
            <img className="w-7" src={Logo} alt="Logo Arog" />
            <h1 className="font-bold whitespace-nowrap  text-gray-900 text-[15px] ml-3">
              Asociacion Arog
            </h1>
            </div>
            <i
              className="fa-solid fa-xmark ml-20 cursor-pointer lg:hidden"
              onClick={Open}
            ></i>
          </div>
          <hr className="my-2 text-gray-900" />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-100 text-gray-900">
          <i className="fa-solid fa-magnifying-glass text-sm"></i>
          <input
            type="text"
            placeholder="Buscar"
            className="text-[15px] ml-4 w-full bg-transparent focus:outline-none"
          />
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900">
          <i className="fa-solid fa-house"></i>
          <span className="text-[15px] ml-4 text-gray-900">Home</span>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900">
          <i className="fa-solid fa-house"></i>
          <span className="text-[15px] ml-4 text-gray-900">Home</span>
        </div>
        <hr className="my-4 text-gray-500" />
        <div
          className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-verde-principal text-gray-900"
          onClick={DropDown}
        >
          <i className="fa-solid fa-house"></i>
          <div className="flex justify-between w-full items-center">
            <span className="text-[15px] ml-4 text-gray-900">Chat</span>
            <span className="text-sm rotate-180 transition-transform duration-100" id="arrow">
              <i className="fa-solid fa-chevron-up"></i>
            </span>
          </div>
        </div>
        <div
          className="text-left text-sm font-thin mt-2 w-4/5 mx-auto text-gray-900 hidden transition-all duration-300"
          id="submenu"
        >
          <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
            Social
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
            Social
          </h1>
          <h1 className="cursor-pointer p-2 hover:bg-gray-600 hover:text-white rounded-md mt-1">
            Social
          </h1>
        </div>
        <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-red-200 text-white">
          <i className="fa-solid fa-right-from-bracket text-red-600"></i>
          <span className="text-[15px] ml-4 text-red-600">Cerrar</span>
        </div>
      </div>
    </>
  );
}
