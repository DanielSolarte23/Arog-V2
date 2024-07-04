import "@fortawesome/fontawesome-free/css/all.min.css";
import LogoArog from "../../images/logoArogText.svg";
import BarraLateral from "../../components/admins/BarraLateral";
import Maps from "../../components/admins/GestionRutasMap";

export default function PPage() {
  return (
    <main className="w-full h-screen box-border m-0">
      <header className="w-full h-[12%] flex items-center justify-between px-6   py-1">
        <img className="h-full" src={LogoArog} />
        <div className="flex h-1/3  items-center gap-2">
          <p className="text-lg font-medium text-gray-600">Maja Sanchez</p>
          <i className="fa-solid fa-user-large text-white bg-verde-principal p-4 rounded-full"></i>
        </div>
      </header>
      <main className="h-[88%]">
        <BarraLateral />
        <Maps  />

      </main>
    </main>
  );
}
