import { useEffect, useRef } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const LOCK_MS = 800;
const THRESHOLD = 10;

function App() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    let locked = false;
    let lockTimer = null;

    const goTo = (index) => {
      const count = el.children.length;
      const clamped = Math.max(0, Math.min(count - 1, index));
      el.scrollTo({ left: clamped * el.clientWidth, behavior: "smooth" });
    };

    const currentIndex = () => Math.round(el.scrollLeft / el.clientWidth);

    const lock = () => {
      locked = true;
      clearTimeout(lockTimer);
      lockTimer = setTimeout(() => (locked = false), LOCK_MS);
    };

    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;

      e.preventDefault();
      if (locked || Math.abs(e.deltaY) < THRESHOLD) return;

      lock();
      goTo(currentIndex() + (e.deltaY > 0 ? 1 : -1));
    };

    const handleKey = (e) => {
      if (locked) return;

      if (e.key === "ArrowRight" || e.key === "PageDown") {
        e.preventDefault();

        lock();
        goTo(currentIndex() + 1);
      } else if (e.key === "ArrowLeft" || e.key === "PageUp") {
        e.preventDefault();

        lock();
        goTo(currentIndex() - 1);
      }
    };

    const handleResize = () => {
      el.scrollTo({
        left: currentIndex() * el.clientWidth,
        behavior: "instant",
      });
    };

    el.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("keydown", handleKey);
    window.addEventListener("resize", handleResize);

    return () => {
      el.removeEventListener("wheel", handleWheel);
      window.removeEventListener("keydown", handleKey);
      window.removeEventListener("resize", handleResize);
      clearTimeout(lockTimer);
    };
  }, []);

  return (
    <main className="flex h-screen flex-col overflow-hidden">
      <NavBar />
      <div
        ref={containerRef}
        className="z-10 flex flex-1 min-h-0 w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-none"
      >
        <section id="home" className="section gap-8">
          <div className="font-bold">
            <h1 className="text-[#0000006c] text-7xl">
              hello, my name is
              <br />
              <span className="text-black underline decoration-red-500 decoration-wavy">
                Soye Usoroh
              </span>
            </h1>
          </div>
        </section>

        <section id="projects" className="section">
          <h1 className="font-bold text-[#0000006c] text-2xl">
            I'm always working on something new. I enjoy creating things and
            finding ways to bring my ideas to life with art and coding.
          </h1>

          <h2 className="text-2xl font-bold text-[#0000006c]">
            I dabble in everything from fullstack web development to mobile and
            desktop applications, games and embedded systems and even 3D
            modelling and arts and crafts.
          </h2>
        </section>

        <section id="about" className="section">
          <h1 className="font-bold text-[#0000006c] text-2xl">
            whoami? well I'm{" "}
            <span className="underline decoration-red-400 decoration-wavy">
              Soye
            </span>{" "}
            of course. Who else would I possibly be? ( ͡° ͜ʖ ͡°)
          </h1>

          <h2 className="text-2xl font-bold text-[#0000006c]">
            Welcome to my digital playground, feel free to explore.
          </h2>
        </section>

        <Footer />
      </div>
    </main>
  );
}

export default App;
