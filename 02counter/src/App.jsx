import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState(0);

  function handleClickForIncrement() {
    setValue((v) => v + 1);
    setValue((v) => v + 1);
    setValue((v) => v + 1);
    setValue((v) => v + 1);
    setValue((v) => v + 1);
  }

  function handleClickForDecrement() {
    setValue((v) => v - 1);
  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value: {value}</h2>
      <button onClick={handleClickForIncrement}>Add value</button>
      <br></br>
      <br />
      <button onClick={handleClickForDecrement}>Remove value</button>
    </>
  );
}

export default App;
