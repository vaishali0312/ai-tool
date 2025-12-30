import React, { useState, Suspense } from "react";

// Lazy loading the heavy component
const HeavyComponent = React.lazy(() =>
  import("./components/HeavyComponent")
);

function App() {
  const [count, setCount] = useState(0);

  console.log("Parent component rendered");

  return (
    <div style={{ padding: "20px" }}>
      <h1>React.memo & Lazy Loading Demo</h1>

      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>
        Increment Counter
      </button>

      <hr />

      {/* Suspense for lazy loading */}
      <Suspense fallback={<h3>Loading Heavy Component...</h3>}>
        <HeavyComponent />
      </Suspense>
    </div>
  );
}

export default App;
