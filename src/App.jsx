import "./App.css";
import Noise from "./components/Noise.jsx";
import Grid from "./components/Grid.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <Grid />
      <Noise />
      {/* <ProfileCard /> */}

      <main className="relative z-10 min-w-0 flex flex-col items-center mx-6 sm:mx-6 md:mx-8 lg:mx-55">
        <NavBar />

        <section
          id="home"
          className="flex flex-col w-full min-w-0 md:min-h-screen min-h-[65svh]"
        >
          <div className="font-lora mt-auto text-[clamp(1rem,3vw,2.5rem)] leading-normal">
            <p>I am Soye Usoroh,</p>
            <p>
              a <span className="italic">digital polymath</span> and{" "}
              <span className="italic">“creative techie”</span>.
            </p>
          </div>

          <figure className="w-full">
            <img
              src="maintag_homepage_noversion.png"
              alt="soyedotcom_maintag"
              className="block h-auto w-full"
            />
          </figure>
        </section>
      </main>
    </>
  );
}

export default App;
