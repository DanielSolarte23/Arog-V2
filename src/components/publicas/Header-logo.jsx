import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../styles/homePage.css"

export default function Header() {
  //Funcion que agrega el estido display block al div al hacer click
  const mostrar = () => {
    const nav = document.querySelector(".navegacion");
    //agrega estilo
    nav.style.display = "block";
    //agrega una nueva clase despues de hacer click
    nav.classList.add('nav-responsive')
    //quita las clases que tenia anteriormente al hacer click
    nav.classList.remove("navegacion flex w-1/2 items-center")
  };

  return (
    <header id="header1" className="w-full h-[14%] flex px-8">
      {/* contenedor de logo y texto*/}
      <section className="flex w-1/2 contenedor-logo">
        {/* contenedor del logo*/}
        <article className="w-[13%] h-full p-2 contenedor-img">
          <img
            className="w-full h-full object-fit"
            src="src/images/logoArogNuevo.png"
            alt="AROG"
          />
        </article>
        {/* contenedor del texto*/}
        <article className="flex items-center contenedor-text">
          <p className="font-semibold text-[20px] text-left leading-5 flex-nowrap">
            Asociación de <br /> recicladores de oficio <br />{" "}
            <span className="text-[35px] leading-8 flex-nowrap font-bold">
              GOLEROS{" "}
            </span>
          </p>
        </article>
      </section>
      <div onClick={mostrar} id="menu-nav"><i className="fa-solid fa-bars"></i></div>
      {/* contenedor del menu*/}
      <nav className="flex w-1/2 items-center navegacion">
        <ul className="flex w-full justify-between px-8 font-semibold text-xl">
          <div className="flex">
            <li>
              <a href="#">
                Servicios <span className="p-2">|</span>
              </a>
            </li>
            <li>
              <a href="#">Nosotros</a>
            </li>
          </div>
          <div className="flex">
            <li>
              <a href="#">
                Iniciar sesión <span className="p-2">|</span>
              </a>
            </li>
            <li>
              <a href="#">Crear cuenta</a>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}
