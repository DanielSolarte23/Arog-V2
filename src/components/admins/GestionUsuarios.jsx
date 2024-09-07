import React  from 'react';
import "@fortawesome/fontawesome-free"




export default function GestionUsuarios(){
  const users = [
    { name: 'Ana Maria Sarria', email: 'anamariasarria@gmail.com', location: 'Planta de Tratamiento', role: 'Administrador' },
    { name: 'Ana Maria Sarria', email: 'anamariasarria@gmail.com', location: 'Planta de Tratamiento', role: 'Recolector' },
    { name: 'Ana Maria Sarria', email: 'anamariasarria@gmail.com', location: 'Planta de Tratamiento', role: 'Administrador' },
    { name: 'Ana Maria Sarria', email: 'anamariasarria@gmail.com', location: 'Planta de Tratamiento', role: 'Recolector' },
    { name: 'Ana Maria Sarria', email: 'anamariasarria@gmail.com', location: 'Planta de Tratamiento', role: 'Recolector' },
    { name: 'Ana Maria Sarria', email: 'anamariasarria@gmail.com', location: 'Planta de Tratamiento', role: 'Recolector' },
    { name: 'Ana Maria Sarria', email: 'anamariasarria@gmail.com', location: 'Calle 8# 21 a 56', role: 'Cuidadano' }
  ];

  return (
    <div className="p-4 h-full max-h-full ">
      <div className="flex justify-between mb-2">
        <select className="border border-gray-300 rounded p-2">
          <option>Filtro por</option>
        </select>
        <input type="text" placeholder="Buscar..." className="border border-gray-300 rounded p-2" />
        <button className="bg-green-500 text-white p-2 rounded">Nuevo Usuario +</button>
      </div>
      <table className="min-w-full bg-white border border-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="py-1 px-4 border-b">Nombre Completo</th>
            <th className="py-1 px-4 border-b">Correo Electrónico</th>
            <th className="py-1 px-4 border-b">Ubicación</th>
            <th className="py-1 px-4 border-b">Rol</th>
            <th className="py-1 px-4 border-b">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td className="py-1 px-4 border-b">{user.name}</td>
              <td className="py-1 px-4 border-b">{user.email}</td>
              <td className="py-1 px-4 border-b">{user.location}</td>
              <td className="py-1 px-4 border-b">{user.role}</td>
              <td className="py-1 px-4 border-b">
                <button className="mr-2 p-2 text-gray-900"><i className="fa-solid fa-pencil"></i></button>
                <button className="p-2 text-gray-900"><i className="fa-solid fa-trash"></i></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <button className="p-1 border border-gray-300 rounded mr-2">1</button>
        <button className="p-1 border border-gray-300 rounded mr-2">2</button>
        <button className="p-1 border border-gray-300 rounded">3</button>
      </div>
    </div>
  );
};

