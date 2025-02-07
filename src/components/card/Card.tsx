import "./Card.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Tarea } from "../../domain/Data";
import { createRef, MouseEventHandler, useEffect, useState } from "react";

type CardProps = {
  tarea: Tarea;
  setTareas: (tareas: Tarea[]) => void;
  tareas: Tarea[];
};

function Card(props: CardProps) {
  const { setTareas, tareas, tarea } = props;
  const now = new Date();

  const [editando, setEditando] = useState(true);
  const inputRef = createRef<HTMLInputElement>();

  const eliminarTarea = () => {
    setTareas(tareas.filter((t) => t.id !== tarea.id));
  };

  const handleSubmit = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setEditando(false);
    setTareas([...tareas]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    tarea.title = e.currentTarget.value;
    setTareas([...tareas]);
  };

  useEffect(() => {
    // Código a ejecutar cuando el componente se crea
    inputRef.current?.focus();
  }, []);

  const modificarTarea = () => {
    setEditando(true);
    inputRef.current?.focus();
  };

  return (
    <div className="card">
      <div className="card-left">
        <div className="input-container">
          {editando ? (
            <>
              <input
                type="text"
                ref={inputRef}
                value={tarea.title}
                onChange={handleChange}
              />
              <button className="btn confirm-btn" onClick={handleSubmit}>
                <i className="fa-regular fa-circle-check"></i>
              </button>
            </>
          ) : (
            <p className="desc">{tarea.title}</p>
          )}
        </div>
        <p className="date">
          {now.toLocaleDateString()} - {now.toLocaleTimeString()}
        </p>
      </div>
      <div className="card-right">
        <button className="btn" onClick={eliminarTarea}>
          <i className="fas fa-trash-alt"></i>
        </button>
        <button className="btn" onClick={modificarTarea} disabled={editando}>
          <i className="fas fa-edit"></i>
        </button>
      </div>
    </div>
  );
}

export default Card;
