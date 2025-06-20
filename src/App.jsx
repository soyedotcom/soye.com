import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Taskbar from "./components/Taskbar.jsx";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Taskbar />
      <Navbar />
      <main className="section-container">
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
