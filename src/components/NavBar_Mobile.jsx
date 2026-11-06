import { useState } from "react";

import ProfileCard_Mobile from "./ProfileCard_Mobile";
import CloseIcon from "./CloseIcon";

const NavBar_Mobile = ({ onClose }) => {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <>
      <nav className="bg-white/10 backdrop-blur-2xl fixed z-100 inset-0 flex flex-col justify-center items-start gap-[5vh] font-bold text-xl px-10">
        <div className="flex">
          <button onClick={onClose} className="hover:cursor-pointer hover:animate-spin">
            <CloseIcon />
          </button>
        </div>

        <a onClick={onClose} href="#home">
          HOME
        </a>

        <a onClick={onClose} href="#projects">
          PROJECTS
        </a>

        <a onClick={onClose} href="#about">
          ABOUT
        </a>

        <button
          onClick={() => {
            setCardOpen(true);
          }}
          className="hover:cursor-pointer"
        >
          CONTACT_ME
        </button>
      </nav>

      {cardOpen && <ProfileCard_Mobile onClose={() => setCardOpen(false)} />}
    </>
  );
};

export default NavBar_Mobile;
