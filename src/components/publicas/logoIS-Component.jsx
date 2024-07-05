
import LogoInicio from "../../images/Inicio-Sesion.png"

export default function LogoIS() {
    return (
        <div className="hidden sm:hidden md:block  md:left-0 md:h-screen md:top-0 md:w-[55%] lg:h-full absolute lg:left-0 ">
            <img className="h-full w-full object-fit" src={LogoInicio} />
        </div>
    )
}

/* style={{ backgroundImage: `url(${LogoInicio}),
    backgroundPosition: 'center',
    backgroundSize: 'contain'` }} */