import React, { useState, useEffect } from 'react';

const TodoLocalStorage = () => {
  const [task, setTask] = useState('');
  const [todos, setTodos] = useState(() => {
    return JSON.parse(localStorage.getItem('todos')) || [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTask = () => {
    if (task.trim()) {
      setTodos([...todos, { text: task, done: false }]);
      setTask('');
    }
  };

  const toggleTask = index => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const removeTask = index => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="box">
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={e => setTask(e.target.value)}
        placeholder="New task"
      />
      <button onClick={addTask}>Add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i} style={{ textDecoration: t.done ? 'line-through' : 'none' }}>
            {t.text}
            <button onClick={() => toggleTask(i)}>✔️</button>
            <button onClick={() => removeTask(i)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoLocalStorage;
