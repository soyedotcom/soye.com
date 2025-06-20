import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Taskbar from "./components/Taskbar.jsx";

function App() {
  return (
    <>
      <Taskbar />

      {/* <Taskbar />
      <Navbar />
      <main className="section-container">
        <Home />
        <About />
        <Projects />
      </main> */}
    </>
  );
}

export default App;
