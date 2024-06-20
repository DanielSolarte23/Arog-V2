import "./main";
import images from "./images/imagenEstudioi.jpg";

export default function Componente() {
  return (
    <main className="w-full h-screen flex flex-col  justify-center items-center">
      <h1 className="border  border-red-500  text-4xl font-bold">
        Sobre nosotros
      </h1>
      <div className=" flex justify-center mt-2 h-5/6 w-full border-2 border-purple-500">
        <div className="flex justify-end pr-36 items-center w-1/2">
        <div className="border-2 border-green-5000 w-[30rem] h-[32rem]">
            <img src={images} alt="" className="w-full h-full object-cover" />
          </div>
        </div>
        <div className="flex justify-start items-center border w-1/2 border-red-500 font-bold text-base h-auto font-lexend m-auto">
          <p className="text-2xl border border-red-400 p-4 text-justify w-1/2 ">
            La Asociación de Reciclaje Goleros nació en 2018 con un propósito
            claro: transformar la gestión de residuos en nuestra comunidad y
            promover prácticas sostenibles.Un grupo de vecinos preocupados por
            el creciente problema de la basura decidió unirse y crear una
            solución que involucrará a todos los ciudadanos. Hoy en día,la
            Asociación de Reciclaje Goleros trabaja en estrecha colaboración con
            empresas,"instituciones educativas y organismos gubernamentales,
            fomentando una cultura de reciclaje y responsabilidad ambiental.
            Nuestro compromiso es continuar educando y motivando a la comunidad
            para que juntos podamos construir un futuro más limpio y sostenible.{" "}
          </p>
        </div>
      </div>
    </main>
  );
}
