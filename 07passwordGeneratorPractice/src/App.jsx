import { useCallback, useEffect, useState, useRef } from "react";

import "./App.css";

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(6);
  const [numbers, setNumbers] = useState(false);
  const [characters, setCharacters] = useState(false);
  const passwordRef = useRef(null);

  const generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (characters) str += "!@#$%^&*()-_+=";
    if (numbers) str += "12345567890";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str[char];
    }
    setPassword(pass);
  }, [length, numbers, characters, setPassword]);

  const copyToClipBoard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, length);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    generatePassword();
  }, [length, numbers, characters]);

  return (
    <>
      <h1>Password Generator</h1>
      <div className="container">
        <div>
          <input
            className="input"
            type="text"
            placeholder="password"
            value={password}
            ref={passwordRef}
            readOnly
          />
          <button onClick={copyToClipBoard}>copy</button>
        </div>
        <div>
          <input
            className="range"
            type="range"
            min={6}
            max={10}
            onChange={(e) => setLength(e.target.value)}
          />
          <label htmlFor="">length: {length}</label>
        </div>
        <div>
          <input
            className="checkbox"
            type="checkbox"
            onClick={() => setNumbers((pre) => !pre)}
          />
          <label htmlFor="">numbers: {numbers}</label>
        </div>
        <div>
          <input
            className="checkbox"
            type="checkbox"
            onClick={() => setCharacters((pre) => !pre)}
          />
          <label htmlFor="">characters: {characters}</label>
        </div>
      </div>
    </>
  );
}

export default App;
