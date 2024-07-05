import { useState } from 'react';

const Tabla = () => {
  const [rows, setRows] = useState([
    {
      id: 1,
      fecha: '',
      recipiente: '',
      vacio: '',
      lleno: '',
      diferencia: '',
      responsableArag: '',
      responsableFuente: '',
      observaciones: '',
      editar: false,
      eliminar: false
    },
  ]);

  const handleAddRow = () => {
    setRows([
      ...rows,
      {
        id: rows.length + 1,
        fecha: '',
        recipiente: '',
        vacio: '',
        lleno: '',
        diferencia: '',
        responsableArag: '',
        responsableFuente: '',
        observaciones: '',
        editar: false,
        eliminar: false
      },
    ]);
  };

  const handleEditRow = (index) => {
    setRows(prevRows => {
      const updatedRows = [...prevRows];
      updatedRows[index].editar = !updatedRows[index].editar;
      return updatedRows;
    });
  };

  const handleDeleteRow = (index) => {
    setRows(prevRows => {
      const updatedRows = [...prevRows];
      updatedRows.splice(index, 1);
      return updatedRows;
    });
  };
   let fondo = document.querySelector('body')
   console.log(fondo);

   fondo.style.backgroundColor= "#d1d4d17c"
  return (
    <div className="container mx-auto mt-8">
      

      <table className="w-full border-collapse border-2 border-gray-500 shadow-xl">
        <thead>
          <tr className="bg-gray-200 text-gray-700 font-bold text-left">
            <th className="py-2 px-4"></th>
            <th className="py-2 px-4">Fecha</th>
            <th className="py-2 px-4">Recipiente</th>
            <th className="py-2 px-4">Vacío (Kg)</th>
            <th className="py-2 px-4">LLeno (Kg)</th>
            <th className="py-2 px-4">Diferencia (Kg)</th>
            <th className="py-2 px-4">Responsable Arog</th>
            <th className="py-2 px-4">Responsable Fuente</th>
            <th className="py-2 px-4">Observaciones</th>
            <th className="py-2 px-4">Añadir</th>
            <th className="py-2 px-4">Editar</th>
            <th className="py-2 px-4">Borrar</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={row.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
              <td className="py-2 px-4">
                <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600" />
              </td>
              <td className="py-2 px-4">
                {row.editar ? (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-2 py-1"
                    value={row.fecha}
                    onChange={(e) => {
                      setRows(prevRows => {
                        const updatedRows = [...prevRows];
                        updatedRows[index].fecha = e.target.value;
                        return updatedRows;
                      });
                    }}
                  />
                ) : (
                  row.fecha
                )}
              </td>
              <td className="py-2 px-4">
                {row.editar ? (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-2 py-1"
                    value={row.recipiente}
                    onChange={(e) => {
                      setRows(prevRows => {
                        const updatedRows = [...prevRows];
                        updatedRows[index].recipiente = e.target.value;
                        return updatedRows;
                      });
                    }}
                  />
                ) : (
                  row.recipiente
                )}
              </td>
              <td className="py-2 px-4">
                {row.editar ? (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-2 py-1"
                    value={row.vacio}
                    onChange={(e) => {
                      setRows(prevRows => {
                        const updatedRows = [...prevRows];
                        updatedRows[index].vacio = e.target.value;
                        return updatedRows;
                      });
                    }}
                  />
                ) : (
                  row.vacio
                )}
              </td>
              <td className="py-2 px-4">
                {row.editar ? (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-2 py-1"
                    value={row.lleno}
                    onChange={(e) => {
                      setRows(prevRows => {
                        const updatedRows = [...prevRows];
                        updatedRows[index].lleno = e.target.value;
                        return updatedRows;
                      });
                    }}
                  />
                ) : (
                  row.lleno
                )}
              </td>
              <td className="py-2 px-4">
                {row.editar ? (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-2 py-1"
                    value={row.diferencia}
                    onChange={(e) => {
                      setRows(prevRows => {
                        const updatedRows = [...prevRows];
                        updatedRows[index].diferencia = e.target.value;
                        return updatedRows;
                      });
                    }}
                  />
                ) : (
                  row.diferencia
                )}
              </td>
              <td className="py-2 px-4">
                {row.editar ? (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-2 py-1"
                    value={row.responsableArag}
                    onChange={(e) => {
                      setRows(prevRows => {
                        const updatedRows = [...prevRows];
                        updatedRows[index].responsableArag = e.target.value;
                        return updatedRows;
                      });
                    }}
                  />
                ) : (
                  row.responsableArag
                )}
              </td>
              <td className="py-2 px-4">
                {row.editar ? (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-2 py-1"
                    value={row.responsableFuente}
                    onChange={(e) => {
                      setRows(prevRows => {
                        const updatedRows = [...prevRows];
                        updatedRows[index].responsableFuente = e.target.value;
                        return updatedRows;
                      });
                    }}
                  />
                ) : (
                  row.responsableFuente
                )}
              </td>
              <td className="py-2 px-4">
                {row.editar ? (
                  <input
                    type="text"
                    className="border border-gray-300 rounded-md px-2 py-1"
                    value={row.observaciones}
                    onChange={(e) => {
                      setRows(prevRows => {
                        const updatedRows = [...prevRows];
                        updatedRows[index].observaciones = e.target.value;
                        return updatedRows;
                      });
                    }}
                  />
                ) : (
                  row.observaciones
                )}
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleAddRow(index)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-green-400 duration-300"
                >
                  <h1>+</h1>
                </button>
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleEditRow(index)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-slate-400 duration-300"
                >
                  🖉
                </button>
              </td>
              <td className="py-2 px-4">
                <button
                  onClick={() => handleDeleteRow(index)}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-red-700 duration-300"
                >
                  ♻︎
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tabla;