import { useState } from "react";
import NavBar_Mobile from "./NavBar_Mobile";
import ProfileCard from "./ProfileCard.jsx";

const NavBar = () => {
  const [menuState, setMenuState] = useState(false);
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <>
      <nav className="relative top-0 left-0 right-0 flex flex-row shrink-0 justify-between align-middle py-[2vh] px-[2vw]">
        <div className="hidden items-center md:flex">
          <a href="#home">
            <p className="font-bold text-1xl">SOYEDOTCOM</p>
          </a>
        </div>

        <div className="flex items-center md:hidden">
          <button onClick={() => setMenuState(true)}>
            <p className="font-bold">SOYEDOTCOM</p>
          </button>
        </div>

        <div className="hidden justify-center items-center gap-x-[3vw] sm:gap-x-10 md:flex">
          <a href="#projects">projects</a>

          <a href="#about">about</a>

          <button
            onClick={() => setCardOpen(true)}
            className="hover:cursor-pointer"
          >
            contact_me
          </button>
        </div>
      </nav>

      {menuState && <NavBar_Mobile onClose={() => setMenuState(false)} />}
      {cardOpen && <ProfileCard onClose={() => setCardOpen(false)} />}
    </>
  );
};

export default NavBar;
