import { Tarea } from "../../domain/Data";
import "./Boton.css";

type BotonProps = {
  tareas: Tarea[];
  setTareas: (tarea: Tarea[]) => void;
};

function Boton(props: BotonProps) {
  const { tareas, setTareas } = props;

  const agregarTarea = () => {
    const ultimoId = tareas.length > 0 ? tareas[tareas.length - 1].id : 0;

    const newTarea = {
      id: ultimoId + 1,
      title: `Tarea ${ultimoId + 1}`,
      filtered: false,
    };

    setTareas([...tareas, newTarea]);
  };

  return <button onClick={agregarTarea}>Agregar Tarea</button>;
}

export default Boton;
