import { useState } from "react";

export function TodoCard({ todo }) {
  const [done, setDone] = useState("Mark as Complete");

  async function onclickhandler() {
    const res = await fetch("http://localhost:3000/completed", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: todo._id }),
    });
    const status = await res.status;
    if (status == 200) setDone("Completed");
  }

  return (
    <div className="todos-content">
      <h1>{todo.title}</h1>
      <h2>{todo.description}</h2>
      <button onClick={onclickhandler}>{done}</button>
    </div>
  );
}

export default TodoCard;
