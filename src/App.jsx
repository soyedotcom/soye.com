import "../src/App.css";
import Taskbar from "./components/Taskbar";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";

function App() {
  return (
    <>
      <Taskbar />
      <Navbar />
      <section className="section-container">
        <Home />
        <About />
        <Projects />
      </section>
    </>
  );
}

export default App;
