import Card from "../card/Card";
import "./Lista.css";
import { Tarea } from "../../domain/Data";

type ListaProps = {
  tareas: Tarea[];
  setTareas: (tareas: Tarea[]) => void;
};

function Lista(props: ListaProps) {
  const { tareas, setTareas } = props;
  return (
    <ul className="list">
      {tareas.map(
        (tarea) =>
          !tarea.filtered && (
            <Card
              key={tarea.id}
              tarea={tarea}
              setTareas={setTareas}
              tareas={tareas}
            ></Card>
          )
      )}
    </ul>
  );
}

export default Lista;
