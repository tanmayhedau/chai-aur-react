import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl w-25 mb-4">
        Tailwind Css
      </h1>
      <Card username="tanmay" btnText="click me" />
      <Card username="yash" btnText="visit me"/>
    </>
  );
}

export default App;
