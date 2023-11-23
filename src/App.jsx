import "./App.css";
import { TaskList } from "./assets/componentes/TaskList";
import React from "react";

export const App = () => {
  return (
    <>
      <div className="container">
        <div>
          <div className="title">
            <h1>Aplicacion de Tareas</h1>
          </div>
          <div className="tareas-lista-principal">
            <h1 className="titulo-tareas">Mis Tareas</h1>

            <TaskList />
          </div>
        </div>
      </div>
    </>
  );
};
