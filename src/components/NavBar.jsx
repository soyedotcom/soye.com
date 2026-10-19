import { useState, useEffect } from "react";
import NavBar_Mobile from "./NavBar_Mobile";
import ProfileCard from "./ProfileCard.jsx";

const NavBar = () => {
  const [time, setTime] = useState(new Date());
  const [menuState, setMenuState] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 flex flex-row bg-[#1d1d1d] font-solid text-[clamp(0.8rem,1.2vw,1.5rem)] justify-between align-middle p-[2vh]">
        <div className="hidden items-center md:flex">
          <a href="#home">
            <img
              src="minitag_lowercase.png"
              alt="soyedotcom_logo"
              className="h-auto w-[clamp(4rem,8vw,8rem)]"
            />
          </a>
        </div>

        <div className="flex items-center md:hidden">
          <button onClick={() => setMenuState(true)}>
            <img
              src="menutag.png"
              alt="menu_mobile"
              className="h-auto w-[clamp(3rem,4.5vw,4.5rem)]"
            />
          </button>
        </div>

        <div className="hidden justify-center items-center gap-x-[3vw] sm:gap-x-10 md:flex">
          <a href="#projects">.projects</a>

          <a href="#about">.about</a>

          <button
            onClick={() => setCardOpen(true)}
            className="hover:cursor-pointer"
          >
            .contactMe
          </button>
        </div>

        <div className="flex items-center justify-end gap-x-[5vw] md:gap-x-[1vw] md:w-44">
          <p>{time.toLocaleTimeString()}</p>
          <p>{time.toLocaleDateString()}</p>
        </div>
      </nav>

      {menuState && <NavBar_Mobile onClose={() => setMenuState(false)} />}
      {cardOpen && <ProfileCard onClose={() => setCardOpen(false)} />}
    </>
  );
};

export default NavBar;
