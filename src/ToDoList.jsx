import React, { useState, useCallback } from 'react';

const listadetarefas = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = useCallback(() => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask('');
    }
  }, [task, tasks]);

  return (
    <div>
      <h2>Lista de Tarefas</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Adicionar nova tarefa"
      />
      <button onClick={addTask}>Adicionar</button>
      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
