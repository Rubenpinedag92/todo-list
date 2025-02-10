import styles from "./Card.module.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Tarea } from "../../domain/Data";
import { createRef, useEffect, useState } from "react";

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

  const handleSubmit = () => {
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
    <div className={styles.card}>
      <div className={styles.cardLeft}>
        <div className={styles.inputContainer}>
          {editando ? (
            <>
              <input
                type="text"
                ref={inputRef}
                value={tarea.title}
                onChange={handleChange}
              />
              <button
                className={`btn ${styles.confirmBtn}`}
                onClick={handleSubmit}
              >
                <i
                  className={`fa-regular fa-circle-check ${styles.confirmIcon}`}
                ></i>
              </button>
            </>
          ) : (
            <p className={styles.desc}>{tarea.title}</p>
          )}
        </div>
        <p className={styles.date}>
          {now.toLocaleDateString()} - {now.toLocaleTimeString()}
        </p>
      </div>
      <div className={styles.cardRight}>
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
