import "../src/App.css";

import Taskbar from "./components/Taskbar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  return (
    <>
      <Taskbar />
      <main className="section-container">
        <Home />
        <About /> 
      </main>
    </>
  );
}

export default App;
