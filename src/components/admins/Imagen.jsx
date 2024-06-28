import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import images from  "../../images/imagenpersonas.png";

export default function Imagen(){
    return(
        <section className="flex flex-col items-center justify-center h-screen">
        <div className="px-4 w-10/12">
            <img className="w-full mx-auto" src={images} alt="imagen" style={{ maxWidth: '100%', height: 'auto', width: '200%' }} />
        </div>
        <div className="flex mt-4">
            <button className="w-32 h-8 text-center hover:bg-red-700 text-black  hover:border-red-700" type="submit">
                Descargar <FontAwesomeIcon icon={faArrowDown} style={{ color: "#000000", marginLeft: '8px' }} />
            </button>
            <button className="ml-4 w-32 h-8 text-center bg-red-600 hover:bg-white text-black border border-black hover:border-red-700" type="submit">
                Borrar <FontAwesomeIcon icon={faTrashAlt} style={{ color: "#000000", marginLeft: '8px' }} />
            </button>
        </div>
    </section>
    
    




    )
}