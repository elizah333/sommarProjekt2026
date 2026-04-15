import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center"></section>

      <section id="next-steps"></section>

      <section id="spacer"></section>
    </>
  );
}

export default App;
