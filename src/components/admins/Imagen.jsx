import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

export default function Imagen(){
    return(
        <section>
            <div className=" justify-center flex mt-6">
            <img className="items-center" src="https://trello.com/1/cards/667c6aa1241afee21f352e5c/attachments/667c6ab17ca26c8bdcdc1828/previews/667c6ab27ca26c8bdcdc1880/download/imagennnuevaa.png" alt="imagen" />
            </div>
            <div className="justify-center flex">
      <button className='w-40 h-8 hover:bg-transparent' type="submit" style={{ display: 'flex', alignItems: 'center' }}>
        <span>Descargar</span>
        <FontAwesomeIcon icon={faArrowDown} style={{ color: "#000000", marginLeft: '8px' }} />
      </button>
   <button className='ml-16 bg-red-600 w-40 h-8' type="submit">Borrar <FontAwesomeIcon icon={ faTrashAlt } style={{color: "#000000",}} /> </button>
    </div>
        
        </section>


    )
}