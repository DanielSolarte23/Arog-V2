import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck } from "@fortawesome/free-regular-svg-icons";

export default function Tareas() {
  return (
    <section className="flex flex-col items-start justify-center">
      <div className="flex items-center justify-center">
        <FontAwesomeIcon
          icon={faCalendarCheck}
          style={{ color: "#000000" }}
          size="2x"
        />
        <p className="text-black font-bold ml-2">Hoy</p>
        <p className="ml-1 text-slate-500">3</p>
      </div>

      <div className="flex items-center justify-center mt-5">
        <FontAwesomeIcon
          icon={faCalendarCheck}
          style={{ color: "#000000" }}
          size="2x"
        />
        <p className="text-black font-bold ml-2">Proximo</p>
        <p className="ml-1 text-slate-500">8</p>
      </div>

      <div className="flex items-center justify-center mt-5">
        <FontAwesomeIcon
          icon={faCalendarCheck}
          style={{ color: "#000000" }}
          size="2x"
        />
        <p className="text-black font-bold ml-2">Completados</p>
      </div>

      <div className="flex items-center justify-center mt-5">
        <FontAwesomeIcon
          icon={faCalendarCheck}
          style={{ color: "#000000" }}
          size="2x"
        />
        <p className="text-black font-bold ml-2">Todas las tareas</p>
      </div>
    </section>
  );
}
