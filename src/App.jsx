import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePagina from "./pages/publicas/Home-Page"
import InicioSesion from "./pages/publicas/InicioS-Page"
import Header from "./components/publicas/Header-logo";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route  path="/" element={<HomePagina />}/>
            <Route  path="/inicioSesion" element={<InicioSesion />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}
