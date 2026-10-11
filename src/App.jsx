import "./App.css";
import Noise from "./components/Noise.jsx";
import Grid from "./components/Grid.jsx";

function App() {
  return (
    <>
      <main className="relative min-h-screen w-full overflow-hidden bg-[#161616]">
        <Noise />
        <Grid />

        <div className="items-center absolute bottom-0 left-0 right-0">
          <img
            className="w-screen"
            src="maintag_homepage.svg"
            alt="soyedotcom_maintag"
          />
        </div>
      </main>
    </>
  );
}

export default App;
