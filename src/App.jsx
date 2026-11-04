import { useEffect, useRef } from "react";

import "./App.css";
import NavBar from "./components/NavBar";

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
    <main className="flex flex-col">
      <NavBar />
      <div
        ref={containerRef}
        className="flex h-screen w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-none"
      >
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
  );
}

export default App;
