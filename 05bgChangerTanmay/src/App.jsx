import { useState } from "react";

import "./App.css";
import Button from "./components/Button";

function App() {
  const [value, setValue] = useState("pink");

  return (
    <>
      <h1 className="w-full" style={{ color: value }}>
        Hello world
      </h1>
      <Button text="red" onClick={() => setValue("red")} />
      <Button text="yellow" onClick={() => setValue("yellow")} />
      <Button text="green" onClick={() => setValue("green")} />
      <Button text="blue" onClick={() => setValue("blue")} />
    </>
  );
}

export default App;
