import "../src/App.css";
import Taskbar from "./components/Taskbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <main className="section-container">
        <Taskbar />
        <Navbar />
        <Home />
        <About />
        <Projects />
      </main>
    </>
  );
}

export default App;
