import images from "../../images/imagenEstudioi.jpg";

export default function SobreNosotros() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center">
  <h1 className="border border-red-500 text-4xl font-bold mb-4">
    Sobre nosotros
  </h1>
  <div className="flex flex-col md:flex-row justify-center mt-2 w-full md:w-3/4 lg:w-2/3 border-2 border-purple-500">
    {/* Sección de la imagen */}
    <div className="flex justify-center md:justify-end items-center w-full md:w-1/2">
      <div className="border-2 border-green-500 w-full md:w-[30rem] h-[32rem]">
        <img src={images} alt="" className="w-full h-full object-cover" />
      </div>
    </div>

    {/* Sección del texto */}
    <div className="flex justify-center items-center border w-full md:w-1/2 border-red-500 font-bold text-base h-auto font-lexend m-auto">
      <p className="text-xl md:text-2xl border border-red-400 p-4 text-justify w-full h-1/2">
        La Asociación de Reciclaje Goleros nació en 2018 con un propósito claro:
        transformar la gestión de residuos en nuestra comunidad y promover prácticas
        sostenibles. Un grupo de vecinos preocupados por el creciente problema de la
        basura decidió unirse y crear una solución que involucrara a todos los
        ciudadanos. Hoy en día, la Asociación de Reciclaje Goleros trabaja en estrecha
        colaboración con empresas, instituciones educativas y organismos gubernamentales,
        fomentando una cultura de reciclaje y responsabilidad ambiental. Nuestro
        compromiso es continuar educando y motivando a la comunidad para que juntos
        podamos construir un futuro más limpio y sostenible.
      </p>
    </div>
  </div>
</main>

);
}
