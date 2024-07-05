import React from 'react'

export default function ListaTareas() {
    
  return (
    <div className='flex w-2/3  h-full'>
    <div className="overflow-x-auto shadow-md w-full ">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white dark:bg-gray-300">
            <div>
                <button id="dropdownActionButton" data-dropdown-toggle="dropdownAction" className="inline-flex items-center text-gray-500 bg-black border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-slate-200 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-200 dark:hover:border-gray-600 dark:focus:ring-gray-700 mt-6 ml-6" type="button">
                    <span className="sr-only">Action button</span>
                    <h1 className='text-black'>Filtrar Por</h1>
                    <svg className="w-2.5 h-2.5 ms-2.5  " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4"/>
                    </svg>
                </button>
                
                {/* <!-- Dropdown menu --> */}
                <div id="dropdownAction" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                    <ul className="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownActionButton">
                        <li>
                            {/* Añadir Fecha */}
                        </li>
                        <li>
                           {/* Anadir Orden Alfabetico */}
                        </li>
                        <li>
                            {/* Añadir Fecha */}
                        </li>
                    </ul>
                    
                </div>
            </div>
            <div>
            <button id="addRowButton" className='bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded-full mt-6 mr-10 transition ease-in-out delay-150 bg-slate-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-300 duration-300'>+</button>
            </div>
            
            
        </div>
        <table className="w-full h-[85%] text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 table border border-collapse" id='tabla'>
            <thead className="text-xs text-gray-900 uppercase bg-gray-50 dark:bg-zinc-400 dark:text-gray-400">
                <tr>
                    <th scope="col" className="p-4">
                        <div className="flex items-center">
                            <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-all-search" className="sr-only">checkbox</label>
                        </div>
                    </th>
                    <th scope="col" className="px-6 py-3">
                    <h1 className='text-white'>Empleado</h1>
                    </th>
                    
                    <th scope="col" className="px-6 py-3 ">
                        <h1 className='mr-10 text-white'>Estado</h1>
                    </th>
                    <th scope="col" className="px-6 py-3">
                        <h1 className='text-white'>Accion</h1>
                    </th>
                </tr>
            </thead>
            <tbody className=''>
                <tr className="bg-white border-b dark:bg-white  hover:bg-gray-50 dark:hover:bg-zinc-300">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-table-search-1" className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className="flex items-center h-full px-6 py-4 text-gray-900 whitespace-nowrap dark:text-black">
                    <img src="" alt="" />
                        <div className="ps-3">
                            <div className="text-base font-semibold">Esteban Daza</div>
                        </div>  
                    </th>
                    
                    <td className="px-6 py-4">
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> 
                        </div>
                    </td>
                    <td>
                         <h1 className='text-black'>Nueva Asignacion de Ruta</h1>
                         <h6 className='text-stone-600'>3 Puntos de Ruta</h6>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-white hover:bg-gray-50 dark:hover:bg-zinc-300">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className="flex items-center h-full px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        <img src="" alt="" />
                        <div className="ps-3">
                            <div className="text-base font-semibold">Jairo Cabrera</div>
                            
                        </div>
                    </th>
                    
                    <td className="px-6 py-4">
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> 
                        </div>
                    </td>
                    <td>
                        <h1 className='text-black'>Nueva Asignacion de Ruta</h1>
                        <h6 className='text-stone-600'>2 Informes Pedientes</h6>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-white  hover:bg-gray-50 dark:hover:bg-zinc-300">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className="flex items-center h-full px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        <img src="" alt="" />
                        <div className="ps-3">
                            <div className="text-base font-semibold">Juan Sanchez</div>
                            
                        </div>
                    </th>
                    
                    <td className="px-6 py-4">
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> 
                        </div>
                    </td>
                    <td>
                        <h1 className='text-black'>Registro Fotografico</h1>
                        <h6 className='text-stone-600'>Pendiente</h6>
                    </td>
                </tr>
                <tr className="bg-white border-b dark:bg-white  hover:bg-gray-50 dark:hover:bg-zinc-300">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-2" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-table-search-2" className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className="flex items-center  h-full px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        <img src="" alt="" />
                        <div className="ps-3">
                            <div className="text-base font-semibold">Ricardo Erazo</div>
                            
                        </div>
                    </th>
                    
                    <td className="px-6 py-4">
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> 
                        </div>
                    </td>
                    <td>
                        <h1 className='text-black'>Nueva Asignacion de Ruta</h1>
                        <h6 className='text-stone-600'>Pendiente</h6>
                    </td>
                </tr>
                <tr className="bg-white dark:bg-white hover:bg-gray-50 dark:hover:bg-zinc-300">
                    <td className="w-4 p-4">
                        <div className="flex items-center">
                            <input id="checkbox-table-search-3" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="checkbox-table-search-3" className="sr-only">checkbox</label>
                        </div>
                    </td>
                    <th scope="row" className="flex items-center h-full px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-black">
                        <img src="" alt="" />
                        <div className="ps-3">
                            <div className="text-base font-semibold">Joshua Orozco</div>
                            
                        </div>
                    </th>
                    
                    <td className="px-6 py-4">
                        <div className="flex items-center">
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> 
                        </div>
                    </td>
                    <td >
                        <h1 className='text-black'>Nueva Asignacion de Ruta</h1>
                        <h6 className='text-stone-600'>Pendiente</h6>
                    </td>
                </tr>

                
            </tbody>
        </table>
    </div>
    <div></div>
    </div>
  )
}

