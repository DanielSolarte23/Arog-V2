
import LogoInicio from "../../images/Inicio-Sesion.png"

export default function LogoIS() {
    return (
        <div className="w-1/2 h-full bg-cover">
            <img className="h-full w-full object-cover" src={LogoInicio} />
        </div>
    )
}

/* style={{ backgroundImage: `url(${LogoInicio}),
    backgroundPosition: 'center',
    backgroundSize: 'contain'` }} */