import React from "react";

function Button({text, onClick}) {
  return (
    <div style={{ marginBottom: "5px" }}>
      <button onClick={onClick}>Click me to change color of text to { text}</button>
    </div>
  );
}

export default Button;
