import '@fortawesome/fontawesome-free/css/all.min.css';

export default function EditarCertificado() {
    return (
        // contenedor principal
        <section className="flex items-center justify-center h-screen">
            <aside className="h-[90%] w-[23%] border border-fuchsia-800 flex flex-col items-center px-3 py-4 font-semibold">
                {/* boton1 */}
                <button className=" w-11/12 bg-gray-200 text-black px-2 py-2 rounded-sm hover:bg-gray-400 text-lg ">
                    Generar certificado
                </button>
                {/* boton2 */}
                <button className="w-11/12 bg-gray-200 text-black px-2 py-2 rounded-sm hover:bg-gray-400 mt-3 text-lg">
                    Generar informe
                </button>

                <h5 className="pt-12 pb-4 text-sm">ingrese los datos para generar el certificado</h5>

                <input
                    type="text"
                    placeholder="Ingrese el nombre"
                    className=" w-60 bg-gray-200 text-black px-2 py-1 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-500 placeholder:text-[15px]"
                />
                <input
                    type="text"
                    placeholder="Ingrese número de documento"
                    className=" w-60 bg-gray-200 text-black px-2 py-1 my-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-500 placeholder:text-[15px]"
                />
                <input
                    type="text"
                    placeholder="Ingrese la fecha de inicio"
                    className=" w-60 bg-gray-200 text-black px-2 py-1 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-500 placeholder:text-[15px]"
                />
                <input
                    type="text"
                    placeholder="Ingrese la fecha fin"
                    className=" w-60 bg-gray-200 text-black px-2 py-1 mb-3 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-500 placeholder:text-[15px]"
                />
                <input
                    type="text"
                    placeholder="Ingrese fecha de generación"
                    className=" w-60 bg-gray-200 text-black px-2 py-1 mb-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 placeholder-gray-500 placeholder:text-[15px]"
                />

                <button className="w-60 bg-gray-200 text-black px-2 py-1 rounded-sm hover:bg-gray-400 text-[15px] flex items-center justify-between">
                    <span>Tipo de certificado</span>
                    <i className="fa-solid fa-angle-down text-black"></i>
                </button>

                <button className="w-60 bg-gray-200 text-black px-2 py-1 rounded-sm hover:bg-gray-400 mt-3 text-[15px] flex items-center justify-between">
                <span>Firmado por</span>
                <i className="fa-solid fa-angle-down text-black"></i>
                </button>

                <button className=" w-[58%] bg-gray-200 text-black px-2 py-2 rounded-sm hover:bg-gray-400 text-lg text-start mt-3 flex items-center justify-between" >
                    <span>Descargar PDF</span>
                    <i class="fa-solid fa-file-arrow-down"></i>
                </button>
            </aside>
        </section>

    );
}

