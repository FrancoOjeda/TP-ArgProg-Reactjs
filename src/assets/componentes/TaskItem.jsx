import React from "react";
import "../estilos/TaskItem.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

export const TaskItem = ({
  id,
  texto,
  completada,
  completarTarea,
  eliminarTarea,
}) => {
  return (
    <div
      className={
        completada ? "tarea-contenedor completada" : "tarea-contenedor"
      }
    >
      <div className="tarea-texto" onClick={() => completarTarea(id)}>
        {texto}
      </div>
      <div
        className="tarea-contenedor-iconos"
        onClick={() => eliminarTarea(id)}
      >
        <AiOutlineCloseCircle className="tarea-icono" />
      </div>
    </div>
  );
};
