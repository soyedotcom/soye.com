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

          <section className="bg-[#a9a9a9] rounded-md text-[#2c2c2c] md:py-[5vh] md:px-[2vw] text-center">
            <article className="flex flex-col my-7 gap-[2vh]">
              <p className="text-[clamp(2rem,4vw,4rem)]">
                CURRENTLY UNDER CONSTRUCTION
              </p>
              <p className="italic text-[clamp(0.8rem,1vw,1rem)]">
                thank you for understanding!
              </p>
            </article>
          </section>
        </section>

        <section id="about" className="flex flex-col w-full min-w-0">
          <h1 className="font-outline text-[clamp(2rem,4vw,4.5rem)] mb-[2.5vh]">
            .About
          </h1>

          <article className="text-[clamp(1.3rem,1vw,1.5rem)] leading-relaxed text-left font-solid font-light ">
            <p>I am Soye and I enjoy making things.</p>
            <p>
              I'm a computer engineering graduate with a curiosity for how
              things work, how they're built and how they can be made better. I
              explore the intersections of software, hardware, electronics and
              thoughtful design, creating everything from web applications and
              games to embedded systems and interactive 3D experiences.
            </p>
          </article>
        </section>
      </main>

      <footer className="bg-[#1d1d1d] relative p-4 w-full flex flex-col mt-[5vh] font-solid gap-[2vh] items-center">
        <figure>
          <img
            src="maintag_homepage_noborder.png"
            alt="@soyedotcom"
            className="w-[35vw] block"
          />
        </figure>
        <p className="text-[clamp(0.8rem,1vw,1rem)] text-center">
          MADE BY SOYE USOROH · 2026 · VERSION 0.2
        </p>
      </footer>
    </>
  );
}

export default App;
