import { useEffect, useState } from "react";

import "./App.css";
import ThemeBtn from "./components/ThemeBtn";
import CardUI from "./components/CardUI";
import { ThemeProvider } from "./contexts/theme";

function App() {
  const [themeMode, setThemeMode] = useState("light");
  const lightMode = () => {
    setThemeMode("light");
  };
  const darkMode = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ lightMode, themeMode, darkMode }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <CardUI />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
