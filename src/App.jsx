import { useState } from "react";
import { useEffect } from "react";
import chartRenderer from "./Chart";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    chartRenderer([]);
  }, []);

  return (
    <>
      <div>
        REMOTE APP
        <button onClick={() => setCount(count + 1)}>This is: {count}</button>
        <div id="CanvasContainer"></div>
      </div>
    </>
  );
}

export default App;
