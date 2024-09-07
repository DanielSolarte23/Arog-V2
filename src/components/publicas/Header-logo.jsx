import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/homePage.css";
import { Link } from "react-router-dom";
import LogoArog from "../../images/logoArogNuevo.png"

export default function Header() {
  return (
    <header
      id="header1"
      className="w-full h-[14%] shadow-lg z-50 flex items-center bg-white fixed px-8 justify-between"
    >
      {/* contenedor de logo y texto*/}
      <a href="#Inicio" className="flex  ">
        <section className="flex gap-2   contenedor-logo">
          {/* contenedor del logo*/}
            <img
              className=" w-16 h-full"
              src={LogoArog}
              alt="AROG"
            />
          {/* contenedor del texto*/}
          <article className="flex items-center contenedor-text">
            <p className="font-semibold text-[16.5px]  leading-5 ">
              Asociación de <br /> recicladores de oficio <br />
              <span className="text-[35px] flex-nowrap font-bold">
                GOLEROS
              </span>
            </p>
          </article>
        </section>
      </a>
      {/* <div onClick={mostrar} id="menu-nav"><i className="fa-solid fa-bars"></i></div> */}
      {/* contenedor del menu*/}
      <nav className="flex items-center navegacion">
        <ul className="flex w-full justify-between gap-14 px-8 font-semibold text-lg">
          <div className="flex">
            <li>
              <a href="#Servicios">
                Servicios <span className="p-2">|</span>
              </a>
            </li>
            <li>
              <a href="#SobreNosotros">Nosotros</a>
            </li>
          </div>
          <div className="flex">
            <li>
              <Link to="inicioSesion">
                Iniciar sesión <span className="p-2">|</span>
              </Link>
            </li>
            <li>
              <Link to="Registro">Crear cuenta</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
