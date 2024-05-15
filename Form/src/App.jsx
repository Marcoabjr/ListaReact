import { useState } from 'react';
import Todo from "./components/Todo";
import TodoForm from "./components/TodoForm"

import "./App.css";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Treino A",
      category: "Treino Superiores-Anteriores",
      isCompleted: false,
    },

    {
      id: 2,
      text: "Treino B",
      category: "Treino Inferiores",
      isCompleted: false,
    },

    {
      id: 3,
      text: "Treino C",
      category: "Treino Superiores-Anteriores",
      isCompleted: false,
    }
  ])

  const addTodo =(text, category) => {
      const newTodos = [...todos, {
        id: Math.floor(Math.random() * 1000),
        text,
        category,
        isCompleted: false,

      },
    ];
    setTodos(newTodos);
  };

  const removeTodo = (id) => {
    const newTodos = [...todos];
    const filteredTodos = newTodos.filter(todo => todo.id !== id ? todo: null);
    setTodos(filteredTodos);
  }

  const completeTodo = (id) => {
    const newTodos = [...todos];
    newTodos.map((todo) => todo.id === id ? todo.isCompleted = !todo.isCompleted : todo);
    setTodos(newTodos);
  }
  
  return  <div className="app"> 
    <h1>Lista de Treinos</h1>
    <div className="todo-list">
      {todos.map((todo) => (
       <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo} />
      ))}
    </div>
    <TodoForm addTodo={addTodo}/>
  </div> 
  
}

export default App;
