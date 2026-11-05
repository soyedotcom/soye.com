import { useEffect, useRef } from "react";

import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";

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
    <main className="relative flex flex-col h-screen overflow-hidden">
      <div className="z-20 absolute top-0 left-0 right-0">
        <NavBar />
      </div>

      <div
        ref={containerRef}
        className="relative z-10 flex flex-1 min-h-0 w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scrollbar-none scroll-smooth"
      >
        <Home />
        <Projects />
        <About />

        <Footer />
      </div>
    </main>
  );
}

export default App;
