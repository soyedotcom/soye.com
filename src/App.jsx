import "./App.css";
import Noise from "./components/Noise.jsx";
import Grid from "./components/Grid.jsx";
import NavBar from "./components/NavBar.jsx";
// import ProfileCard from "./components/ProfileCard.jsx";

function App() {
  return (
    <>
      <Grid />
      <Noise />
      {/* <ProfileCard /> */}

      <main className="z-10 max-w-screen flex flex-col items-center mx-4 sm:mx-6">
        <NavBar />

        <section id="home" className="flex flex-col md:min-h-screen min-h-[55svh]">
          <div className="font-lora mt-auto text-[clamp(1rem,3.2vw,5rem)] leading-normal">
            <p>I am Soye Usoroh,</p>
            <p>
              a <span className="italic">digital polymath</span> and{" "}
              <span className="italic">“creative techie”</span>.
            </p>
          </div>

          <figure>
            <img
              src="maintag_homepage_noversion.png"
              alt="soyedotcom_maintag"
            />
          </figure>
        </section>
      </main>
    </>
  );
}

export default App;
