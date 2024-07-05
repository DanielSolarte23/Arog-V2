import React from 'react';
import Maps from "../../images/Maps.png"

export default function Rutas () {
  return (
    <div className="flex flex-col w-full h-[90%]">
      <header className="flex items-center h-12 px-4  justify-between border-b shrink-0 md:px-6">
        <button className="inline-flex items-center bg-verde-principal justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mr-4">
          + Añadir Ruta
        </button>
        <nav className="flex flex-row items-center gap-4 text-sm font-medium">
          <a className="text-muted-foreground" href="#">
            Archivo
          </a>
          <a className="text-muted-foreground" href="#">
            Editar
          </a>
          <a className="text-muted-foreground" href="#">
            Ayuda
          </a>
        </nav>
        <div className="flex items-center w-full gap-4 ml-auto relative">
          <input
            className="flex h-10 w-full ml-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-8 sm:w-[100px] md:w-[200px] lg:w-[300px]"
            placeholder="Filtrar por fecha"
            type="search"
          />

        </div>
      </header>
      <main className="flex flex-col p-1">
        <div className="flex flex-row  gap-4 ">
          <div className="flex flex-col justify-between  w-2/5">
          <div>
            <div className="flex items-center justify-between p-2 border-b">
              <span>Nombre de la ruta</span>
              <span>Funcionario</span>
              <span>Vehiculo</span>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center justify-between p-2 border-b">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked="false"
                  data-state="unchecked"
                  value="on"
                  className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  id="ruta1"
                ></button>
                <label htmlFor="ruta1" className="flex-1 ml-2">
                  Aida Lucia
                </label>
                <span>Funcionario</span>
                <span>CPI681</span>
              </div>
              <div className="flex items-center  justify-between p-2 border-b">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked="false"
                  data-state="unchecked"
                  value="on"
                  className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  id="ruta2"
                ></button>
                <label htmlFor="ruta2" className="flex-1 ml-2">
                  Barrio Bolivar
                </label>
                <span>Funcionario</span>
                <span>CPI681</span>
              </div>
              <div className="flex items-center  justify-between p-2 border-b">
                <button
                  type="button"
                  role="checkbox"
                  aria-checked="false"
                  data-state="unchecked"
                  value="on"
                  className="peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground"
                  id="ruta3"
                ></button>
                <label htmlFor="ruta3" className="flex-1 ml-2">
                  Galeria la esmeralda
                </label>
                <span>Funcionario</span>
                <span>CPI681</span>
              </div>
            </div>
            </div>
            <div className="p-2 border-t">3 Rutas seleccionadas</div>
          </div>
          <div className="w-3/5 p-1 bg-gray-300">
            <img
              src={Maps}
              alt="Map"
              className="w-full h-auto"
              width="600"
              height="250"
              style={{ aspectRatio: '600 / 290', objectFit: 'cover' }}
            />
          </div>
        </div>
        <div className="mt-1">
          <div className="flex items-center justify-between p-1 border-b">
            <span>10:00</span>
            <span>10:30</span>
            <span>11:00</span>
            <span>11:30</span>
            <span>12:00</span>
            <span>12:30</span>
            <span>13:00</span>
            <span>13:30</span>
            <span>14:00</span>
            <span>14:30</span>
            <span>15:00</span>
            <span>15:30</span>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-1/3 p-1 border-r">
                <span className="font-bold">CPI 681 - Barrio Bolivar</span>
                <span>Joshua Escobar</span>
              </div>
              <div className="flex items-center w-2/3 gap-2">
                <div className="flex items-center justify-center w-1/6 h-8 bg-green-500 text-white">1</div>
                <div className="flex items-center justify-center w-1/6 h-8 bg-green-500 text-white">2</div>
                <div className="flex items-center justify-center w-1/6 h-8 bg-green-500 text-white">3</div>
                <div className="flex items-center justify-center w-1/6 h-8 bg-green-500 text-white">4</div>
                <div className="flex items-center justify-center w-1/6 h-8 bg-green-500 text-white">5</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-1/3 p-1 border-r">
                <span className="font-bold">CPI 681 - AIDA LUCIA</span>
                <span>Joshua Escobar</span>
              </div>
              <div className="flex items-center w-2/3 gap-2">
                <div className="flex items-center justify-center w-1/6 h-8 bg-blue-500 text-white">1</div>
                <div className="flex items-center justify-center w-1/6 h-8 bg-blue-500 text-white">2</div>
                <div className="flex items-center justify-center w-1/6 h-8 bg-blue-500 text-white">3</div>
                <div className="flex items-center justify-center w-1/6 h-8 bg-blue-500 text-white">4</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex flex-col w-1/3  border-r">
                <span className="font-bold">CPI 681 - Galeria la Esmeralda</span>
                <span>Joshua Escobar</span>
              </div>
              <div className="flex items-center w-2/3 gap-2">
                <div className="flex items-center justify-center w-1/6 h-8 bg-red-500 text-white">1</div>
                <div className="flex items-center justify-center w-1/6 h-8 bg-red-500 text-white">2</div>
                <div className="flex items-center justify-center w-1/6 h-8 bg-red-500 text-white">3</div>
                <div className="flex items-center justify-center w-1/6 h-8 bg-red-500 text-white">4</div>
                <div className="flex items-center justify-center w-1/6 h-8 bg-red-500 text-white">5</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};


