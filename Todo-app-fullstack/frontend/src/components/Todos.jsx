import TodoCard from "./TodoCard";
import '../App.css'

export function Todos({ todos }) {
  return (
    <div className="todos-container">
      {todos.map(function (todo) {
        return <TodoCard key={todo._id} todo={todo} />;
      })}
    </div>
  );
}
