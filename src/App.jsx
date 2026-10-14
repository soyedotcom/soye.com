import "./App.css";
import Noise from "./components/Noise.jsx";
import Grid from "./components/Grid.jsx";
import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  return (
    <>
      <div className="min-h-screen w-full">
        <Grid />
        <Noise />

        <main className="flex flex-col w-full items-center px-4 sm:px-6">
          <ProfileCard />
        </main>

        {/* <div className="items-center absolute bottom-0 left-0 right-0">
          <img
            className="w-screen"
            src="maintag_homepage.png"
            alt="soyedotcom_maintag"
          />
        </div> */}
      </div>
    </>
  );
}

export default App;
