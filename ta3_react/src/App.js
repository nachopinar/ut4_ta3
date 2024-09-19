import React, { useState } from 'react';

const TodoList = () => {
  const [tarea, setTarea] = useState('');
  const [tareas, setTareas] = useState([]);

  const agregarTarea = () => {
    if (tarea.trim()) {
      setTareas([...tareas, tarea]);
      setTarea(''); 
    }
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = tareas.filter((_, i) => i !== index);
    setTareas(nuevasTareas);
  };

  return (
    <div>
      <h1>Lista de Tareas</h1>
      <input 
        type="text" 
        value={tarea} 
        onChange={(e) => setTarea(e.target.value)} 
        placeholder="Escribe una tarea" 
      />
      <button onClick={agregarTarea}>Agregar Tarea</button>
      
      <ul>
        {tareas.map((t, index) => (
          <li key={index}>
            {t} <button onClick={() => eliminarTarea(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
