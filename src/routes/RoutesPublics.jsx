import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePagina from "../pages/publicas/Home-Page";
import InicioSesion from "../pages/publicas/InicioS-Page";
import Registro from "../pages/publicas/Registro-Page";
import PPage from "../pages/Admin/PPComponent";
import Rutas from "../components/admins/Rutas";
import Perfil from "../components/admins/Perfil";
import FormularioPerfil from "../components/admins/Formulario";
import AsignacionTareas from "../pages/Admin/AsignacionTareas";
import GestionUsuarios from "../components/admins/GestionUsuarios";
import Tabla from "../components/admins/Tabla";
import RegistroIncidentes from "../components/admins/Regisincidencia";
import Pagos from "../components/admins/Pagos";


export default function RutasPublics() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePagina />} />
        <Route path="/inicioSesion" element={<InicioSesion />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/PPrincipal" element={<PPage />}>
          <Route index element={<Perfil />} />
          <Route path="Rutas" element={<Rutas />} />
          <Route path="Tareas" element={<AsignacionTareas />} />
          <Route path="Usuarios" element={<GestionUsuarios />} />
          <Route path="Pagos" element={<Pagos />} />
          <Route path="Formulario1" element={<Tabla />} />
          <Route path="Incidentes" element={<RegistroIncidentes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
