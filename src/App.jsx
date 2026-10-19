import "./App.css";
import Noise from "./components/Noise.jsx";
import Grid from "./components/Grid.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <Grid />
      <Noise />

      <main className="font-solid relative z-10 min-w-0 flex flex-col items-center mx-6 gap-20 sm:mx-6 md:mx-8 lg:mx-55">
        <NavBar />

        <section
          id="home"
          className="flex flex-col w-full min-w-0 md:min-h-screen min-h-[65svh]"
        >
          <div className="font-lora mt-auto text-[clamp(1rem,3vw,2rem)] leading-normal">
            <p>I am Soye Usoroh,</p>
            <p>
              a <span className="italic">digital polymath</span> and{" "}
              <span className="italic">“creative techie”</span>
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

        <section id="projects" className="flex flex-col w-full min-w-0">
          <h1 className="font-outline text-[clamp(2rem,4vw,4.5rem)] mb-[2.5vh]">
            .Projects
          </h1>

          <section className="bg-[#a7a7a7] rounded-md text-[#2d2d2d] md:py-[5vh] md:px-[2vw] text-center">
            <p className="text-[clamp(2rem,4vw,4rem)] my-7">
              CURRENTLY UNDER CONSTRUCTION
            </p>
            <p className="italic">thank you for understanding.</p>
          </section>
        </section>

        <section id="about" className="flex flex-col w-full min-w-0">
          <h1 className="font-outline text-[clamp(2rem,4vw,4.5rem)] mb-[2.5vh]">
            .About
          </h1>
        </section>
      </main>

      <footer>This is a footer</footer>
    </>
  );
}

export default App;
