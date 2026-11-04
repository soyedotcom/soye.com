import "./App.css";

function App() {
  return (
    <>
      <main>
        <div className="flex h-screen w-full overflow-x-auto overflow-y-hidden scrollbar-none scroll-smooth snap-x snap-mandatory">
          <section id="home" className="h-screen w-screen shrink-0 snap-start">
            <h1 className="font-bold text-9xl">HOME</h1>
          </section>

          <section
            id="projects"
            className="h-screen w-screen shrink-0 snap-start"
          >
            <h1 className="font-bold text-9xl">PROJECTS</h1>
          </section>

          <section id="about" className="h-screen w-screen shrink-0 snap-start">
            <h1 className="font-bold text-9xl">ABOUT</h1>
          </section>
        </div>
      </main>
    </>
  );
}

export default App;
