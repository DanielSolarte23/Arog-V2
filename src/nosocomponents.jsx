import './main'
import images from "./images/imagenEstudioi.jpg"

export default function Componente(){
    return(
        <header className='w-1/10 flex flex-col items-center justify-end'>
        <h1 className= 'border border-red-500 items-center flex justify-center text-2xl'>Sobre nosotros</h1>
        <div className="flex justify-center mt-2"> 
        <div className=' w-1/5 h-2/4'> <img src={images} alt="" className='object-contain w-96 h-96'/></div>  
        <p className='border border-red-500 font-bold text-base  w-1/4 h-1/6 font-lexend'>La Asociación de Reciclaje Goleros nació en 2018 con un propósito claro: transformar la gestión de residuos en nuestra comunidad y promover prácticas sostenibles.Un grupo de vecinos preocupados por el creciente problema de la basura decidió unirse y  crear una solución que involucrará a todos los ciudadanos. Hoy en día,la Asociación de Reciclaje Goleros trabaja en estrecha colaboración con empresas,"instituciones educativas y organismos gubernamentales, fomentando una  cultura de reciclaje y responsabilidad ambiental. Nuestro compromiso es continuar educando y motivando a la comunidad para que juntos podamos construir un futuro más limpio y sostenible. </p> 
    </div>
        </header>
    ) 
}