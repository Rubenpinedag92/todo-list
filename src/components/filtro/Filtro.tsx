import { useEffect, useState } from "react";
import { Tarea } from "../../domain/Data";
import "./Filtro.css";

type FiltroProps = {
  tareas: Tarea[];
  setTareas: (tarea: Tarea[]) => void;
};

export default function Filtro(props: FiltroProps) {
  const { tareas, setTareas } = props;
  const [filtro, setFiltro] = useState("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setTareas(
      tareas.map((t) => {
        t.filtered = !t.title.includes(filtro);
        return t;
      })
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFiltro(e.currentTarget.value);
  };

  return (
    <div className="filtro">
      <input
        type="text"
        className="input"
        placeholder="Buscar tarea..."
        value={filtro}
        onChange={handleChange}
      />
      <button className="btn" onClick={handleClick}>
        <i className="fas fa-search"></i>
      </button>
    </div>
  );
}
