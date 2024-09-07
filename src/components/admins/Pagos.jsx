export default function Pagos(){
    return (
        <div className="">
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-300">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase leading-normal text-xs">
              <th className="py-3 px-2 text-left"><input type="checkbox" className="form-checkbox h-5 w-5" /></th>
              <th className="py-3 px-2 text-left">Item</th>
              <th className="py-3 px-2 text-left">Bahía</th>
              <th className="py-3 px-2 text-left whitespace-nowrap">No. vivienda</th>
              <th className="py-3 px-2 text-left">Usuario</th>
              <th className="py-3 px-2 text-left">Observación</th>
              <th className="py-3 px-2 text-left">Total pagado</th>
              <th className="py-3 px-2 text-left whitespace-nowrap">Febrero <span className="ml-1">&#9660;</span></th>
              <th className="py-3 px-2 text-left">Observación</th>
              <th className="py-3 px-2 text-left">Añadir</th>
              <th className="py-3 px-2 text-left">Editar</th>
              <th className="py-3 px-2 text-left">Borrar</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {[...Array(9)].map((_, index) => (
              <tr key={index} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-2 text-left"><input type="checkbox" className="form-checkbox h-5 w-5" /></td>
                <td className="py-3 px-2 text-left"></td>
                <td className="py-3 px-2 text-left"></td>
                <td className="py-3 px-2 text-left"></td>
                <td className="py-3 px-2 text-left"></td>
                <td className="py-3 px-2 text-left"></td>
                <td className="py-3 px-2 text-left"></td>
                <td className="py-3 px-2 text-left"></td>
                <td className="py-3 px-2 text-left"></td>
                <td className="py-3 px-2 text-left"><button className="bg-green-500 text-white px-3 py-1 rounded"><i className="fas fa-plus"></i></button></td>
                <td className="py-3 px-2 text-left"><button className="bg-blue-500 text-white px-3 py-1 rounded"><i className="fas fa-pen"></i></button></td>
                <td className="py-3 px-2 text-left"><button className="bg-red-500 text-white px-3 py-1 rounded"><i className="fas fa-trash"></i></button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    )
}