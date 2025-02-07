import { useState } from "react";
import "./App.css";
import Boton from "./components/boton/Boton";
import Filtro from "./components/filtro/Filtro";
import Lista from "./components/lista/Lista";
import { Tarea } from "./domain/Data";

function App() {
  const [tareas, setTareas] = useState<Tarea[]>([]);

  return (
    <div className="App">
      <h1 className="title">Lista De Tareas</h1>
      <div className="input-group">
        <Boton tareas={tareas} setTareas={setTareas}></Boton>
        <Filtro tareas={tareas} setTareas={setTareas}></Filtro>
      </div>
      <Lista tareas={tareas} setTareas={setTareas}></Lista>
    </div>
  );
}

export default App;
