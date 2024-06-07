import { useState, useEffect } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import { Todos } from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:3000/todos");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.error("Error fetching todos:", error);
      }
    };

    fetchTodos();
  }, []); // Empty dependency array to run only once

  return (
    <div className="root-container">
      <CreateTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} />
    </div>
  );
}

export default App;
