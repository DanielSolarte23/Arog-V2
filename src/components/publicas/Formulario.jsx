import React, { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellidos, setApellidos] = useState("");
  const [telefono, setTelefono] = useState("");
  const [movil, setMovil] = useState("");
  const [email, setEmail] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [verificarContraseña, setVerificarContraseña] = useState("");

  const handleGuardar = () => {
    const datos = {
      nombre,
      apellidos,
      telefono,
      movil,
      email,
      ciudad,
      contraseña,
      verificarContraseña,
    };
    localStorage.setItem("datos", JSON.stringify(datos));
  };

  const handleLimpiar = () => {
    setNombre("");
    setApellidos("");
    setTelefono("");
    setMovil("");
    setEmail("");
    setCiudad("");
    setContraseña("");
    setVerificarContraseña("");
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-gray-700 font-bold mb-2">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="apellidos"
            className="block text-gray-700 font-bold mb-2"
          >
            Apellidos
          </label>
          <input
            type="text"
            id="apellidos"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={apellidos}
            onChange={(e) => setApellidos(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="telefono"
            className="block text-gray-700 font-bold mb-2"
          >
            Teléfono
          </label>
          <input
            type="tel"
            id="telefono"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="movil"
            className="block text-gray-700 font-bold mb-2"
          >
            Móvil
          </label>
          <input
            type="tel"
            id="movil"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={movil}
            onChange={(e) => setMovil(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-gray-700 font-bold mb-2"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="ciudad"
            className="block text-gray-700 font-bold mb-2"
          >
            Ciudad
          </label>
          <input
            type="text"
            id="ciudad"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={ciudad}
            onChange={(e) => setCiudad(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="contraseña"
            className="block text-gray-700 font-bold mb-2"
          >
            Contraseña
          </label>
          <input
            type="password"
            id="contraseña"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={contraseña}
            onChange={(e) => setContraseña(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="verificarContraseña"
            className="block text-gray-700 font-bold mb-2"
          >
            Verifica la Contraseña
          </label>
          <input
            type="password"
            id="verificarContraseña"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            value={verificarContraseña}
            onChange={(e) => setVerificarContraseña(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          className=" text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out delay-150 bg-green-700 hover:-translate-y-1 hover:scale-110 hover:bg-green-800 duration-300 "
          onClick={handleGuardar}
        >
          Guardar ✔
        </button>
        <button
          className="ml-4 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out delay-150 bg-red-600 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300"
          onClick={handleLimpiar}
        >
          Limpiar ✖
        </button>
      </div>
    </div>
  );
}

export default Formulario;