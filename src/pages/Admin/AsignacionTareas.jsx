import ListaTareas from "../../components/admins/ListaTareas";
import TareaDetalle from "../../components/admins/TareaDetalle";

export default function AsignacionTareas() {
  return (
    <div className="h-full w-full flex">
      <ListaTareas />
      <TareaDetalle />
    </div>
  );
}
