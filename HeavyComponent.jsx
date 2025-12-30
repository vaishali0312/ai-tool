import React from "react";

function HeavyComponent() {
  console.log("Heavy Component Rendered");

  // Simulating heavy computation
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div style={{ background: "#f2f2f2", padding: "20px" }}>
      <h2>Heavy Component</h2>
      <p>This component simulates heavy computation.</p>
      <p>Computation Result: {total}</p>
    </div>
  );
}

// Wrapping with React.memo
export default React.memo(HeavyComponent);
