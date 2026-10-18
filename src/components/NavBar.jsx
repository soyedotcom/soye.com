import { useState, useEffect } from "react";

const NavBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex flex-row bg-transparent font-solid text-[clamp(0.8rem,1.2vw,1rem)] justify-between align-middle m-[2vh]">
        <div className="flex items-center">
          <img src="minitag_lowercase.png" alt="soyedotcom_logo" className="w-30" />
        </div>

        <div className="flex items-center gap-x-[3vw] sm:gap-x-10">
          <a href="#about">.about</a>
          <a href="#projects">.projects</a>
          <button>.contactMe</button>
        </div>

        <div className="flex items-center gap-x-[0.5vw]">
          <p>{time.toLocaleTimeString()}</p>
          <span></span>
          <p>{time.toLocaleDateString()}</p>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
