import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePagina from "../pages/publicas/Home-Page"
import InicioSesion from "../pages/publicas/InicioS-Page"
import Registro from "../pages/publicas/Registro-Page";
 
export default function RutasPublics() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePagina />} />
        <Route path="/inicioSesion" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </BrowserRouter>
  );
}
