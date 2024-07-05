import "@fortawesome/fontawesome-free/css/all.min.css";
import LogoArog from "../../images/logoArogText.svg";
import BarraLateral from "../../components/admins/BarraLateral";
import { Outlet } from "react-router";


export default function PPage() {
  return (
    <main className="w-full h-screen box-border m-0 flex flex-col">
      <header className="w-full h-[12%] shadow-lg flex items-center justify-between px-6 py-1">
        <img className="h-full" src={LogoArog} alt="Logo Arog" />
        <div className="flex h-1/3 items-center gap-2">
          <p className="text-lg font-medium text-gray-600">Usuario</p>
          <i className="fa-solid fa-user-large text-white bg-verde-principal p-4 rounded-full"></i>
        </div>
      </header>
      <div className="flex h-[88%]">
        <BarraLateral />
        <div className="flex-1 overflow-auto py-2 pl-14 pr-5 h-full ">
        <Outlet />
        </div>
      </div>
    </main>
  );
}
