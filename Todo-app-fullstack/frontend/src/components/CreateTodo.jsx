import { useState } from "react";

function CreateTodo({ todos, setTodos }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function onClickHandler() {
    const res = await fetch("http://localhost:3000/todo", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });
    const data = await res.data;
    const status = await res.status;
    if (status == 201) {
      setTodos([...todos, {
        title: title,
        description: description,
        completed: false,
      }]);
      setTitle("");
      setDescription("");
    }
  }

  return (
    <div className="create-todo-container">
      <input
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <input
        placeholder="Enter description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <button onClick={onClickHandler}>Add a Todo</button>
    </div>
  );
}

export default CreateTodo;
