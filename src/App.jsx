import { useState } from "react";
import Display from "./Display";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1> Full Name Display</h1>
      <Display />
    </>
  );
}

export default App;
