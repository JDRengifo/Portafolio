import { useEffect, useState } from "react";
import NavBar from "./component/navBar/NavBar";
import Inicio from "./component/inicio/Inicio";

function App() {
  const [tema, setTema] = useState(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      return "dark";
    }
    return "light";
  });

  useEffect(() => {
    if (tema === "light") {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
    }
  }, [tema]);

  const handleCambioTema = () => {
    setTema((prevTema) => (prevTema === "light" ? "dark" : "light"));
  };

  return (
    <div>
      {/* <div className="h-screen flex justify-center items-center dark:bg-neutral-900"> */}
      <div className="h-screen flex justify-center dark:bg-neutral-900">
        {/* <div className="bg-slate-200 px-4 py-2 rounded hover:bg-slate-300 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"> */}
        <div className="dark:text-white">
          <NavBar handleCambioTema={handleCambioTema} />
          <div>
            <Inicio />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
