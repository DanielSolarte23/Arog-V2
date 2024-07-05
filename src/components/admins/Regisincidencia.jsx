
export default function RegistroIncidentes(){
    return(
        <main className="flex items-center justify-center w-full bg-gray-100 ">
        <div className="w-full p-4 text-sm bg-white shadow-md rounded">
          <h2 className="text-lg font-bold mb-3 text-center">Registro de Incidente</h2>
          <form>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="block text-gray-700">Nombre Completo</label>
                <input type="text" className="w-full mt-1 p-2 border border-gray-200 bg-gray-200 rounded" />
              </div>
              <div>
                <label className="block text-gray-700">Fecha</label>
                <input type="date" className="w-full mt-1 p-2 border border-gray-300  bg-gray-200 rounded" />
              </div>
              <div>
                <label className="block text-gray-700">Cédula</label>
                <input type="text" className="w-full mt-1 p-2 border border-gray-300  bg-gray-200 rounded" />
              </div>
              <div>
                <label className="block text-gray-700">Tipo de incidente</label>
                <input type="text" className="w-full mt-1 p-2 border border-gray-300  bg-gray-200 rounded" />
              </div>
              <div>
                <label className="block text-gray-700">Correo Electrónico</label>
                <input type="email" className="w-full mt-1 p-2 border border-gray-300  bg-gray-200 rounded" />
              </div>
              <div>
                <label className="block text-gray-700">Teléfono</label>
                <input type="tel" className="w-full mt-1 p-2 border border-gray-300 rounded  bg-gray-200" />
              </div>
            </div>
            <div className="mt-2">
              <label className="block text-gray-700">Descripción</label>
              <textarea className="w-full mt-1 p-2 border border-gray-300 rounded  bg-gray-200 h-32"></textarea>
            </div>
            <div className="mt-2 text-center">
              <button type="submit" className="px-4 py-2 bg-green-700 text-white rounded hover:bg-gray-700">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </main>
    );
  };

 