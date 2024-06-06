import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount((count) => count + 1)}>
        Increase Count
      </button>
      <h1>{count}</h1>
      <button onClick={() => setCount((count) => count - 1)}>
        Decrease Count
      </button>
    </div>
  );
}

export default App;
