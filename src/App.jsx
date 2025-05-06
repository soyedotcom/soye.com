import "../src/App.css";

import Taskbar from "./components/Taskbar";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Taskbar />
      <main className="section-container">
        <Home />
        <Home />
        <Home />
      </main>
    </>
  );
}

export default App;
