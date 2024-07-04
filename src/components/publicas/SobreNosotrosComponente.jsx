import images from "../../images/imagenEstudioi.jpg";

export default function SobreNosotros() {
  return (
    <main id="SobreNosotros" className="w-full h-screen border border-red-500 flex flex-col items-center">
    <div className=" text-2xl w-full h-[15%] flex justify-center items-center font-bold">
      <h1 className="">
        Sobre nosotros
      </h1>
    </div>
      <div className="flex w-full h-[85%] justify-center ">
        {/* Sección de la imagen */}
        <div className="flex justify-end pr-16 items-center w-1/2 ">
          <div className=" w-3/4 h-[80%]">
            <img src={images} alt="" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Sección del texto */}
        <div className="flex justify-center items-center  px-16  w-1/2 h-full font-bold font-lexend m-auto">
          <p className="text-base h-5/6  text-justify">
            La Asociación de Reciclaje Goleros nació en 2018 con un propósito
            claro: transformar la gestión de residuos en nuestra comunidad y
            promover prácticas sostenibles. Un grupo de vecinos preocupados por
            el creciente problema de la basura decidió unirse y crear una
            solución que involucrara a todos los ciudadanos. Hoy en día, la
            Asociación de Reciclaje Goleros trabaja en estrecha colaboración con
            empresas, instituciones educativas y organismos gubernamentales,
            fomentando una cultura de reciclaje y responsabilidad ambiental.
            Nuestro compromiso es continuar educando y motivando a la comunidad
            para que juntos podamos construir un futuro más limpio y sostenible.
          </p>
        </div>
      </div>
    </main>
  );
}
