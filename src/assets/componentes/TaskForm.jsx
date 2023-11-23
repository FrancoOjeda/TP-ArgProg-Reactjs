import React, { useState } from "react";
import "../estilos/TaskForm.css";
import { v4 as uuidv4 } from "uuid";
export const TaskForm = (props) => {
  console.log(props);
  const [input, setInput] = useState("");

  const manejarCambio = (e) => {
    setInput(e.target.value);
  };
  const manejarEnvio = (e) => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false,
    };
    props.onSubmit(tareaNueva);
  };
  return (
    <>
      <form onSubmit={manejarEnvio} className="taskForm">
        <input
          className="task-input"
          type="text"
          placeholder="Escriba una tarea"
          name="texto"
          onChange={manejarCambio}
        />
        <button className="task-boton">Agregar Tarea</button>
      </form>
    </>
  );
};
