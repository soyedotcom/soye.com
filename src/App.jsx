import Taskbar from "./components/Taskbar";
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contacts from "./components/Contacts";

function App() {
  return (
    <>
      <Taskbar />
      <NavBar />
      <HomePage />
      <AboutMe />
      <Projects />
      <Contacts />
    </>
  );
}

export default App;
