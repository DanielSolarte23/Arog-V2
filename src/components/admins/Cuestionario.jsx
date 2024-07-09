export default function Cuestionario(){
    return(

        <article className="flex items-center justify-center h-screen w-screen ">
        <div className="w-full h-full bg-white p-4 flex flex-col justify-center items-center">
        <div className="text-center w-full mb-4 h-1/2 border  bg-gray-300 flex items-center justify-center">
          <h2 className="text-lg font-medium">¿Preguntas?</h2>
        </div>
          <div className="grid grid-cols-2 gap-4 w-full px-4">
            <button className="bg-gray-300 hover:bg-verde-principal hover:text-white text-black py-2 px-4 rounded w-full">
              A. Opción 1
            </button>
            <button className="bg-gray-300  hover:bg-verde-principal hover:text-white  text-black py-2 px-4 rounded w-full">
              B. Opción 2
            </button>
            <button className="bg-gray-300  hover:bg-verde-principal hover:text-white text-black py-2 px-4 rounded w-full">
              C. Opción 3
            </button>
            <button className="bg-gray-300  hover:bg-verde-principal hover:text-white text-black py-2 px-4 rounded w-full">
              D. Opción 4
            </button>
          </div>
        </div>
      </article>
    );
  }
  