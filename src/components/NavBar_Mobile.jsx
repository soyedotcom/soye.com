import { useState } from "react";
import ProfileCard from "./ProfileCard";

const NavBar_Mobile = ({ onClose }) => {
  const [cardOpen, setCardOpen] = useState(false);

  return (
    <>
      <nav className="bg-[#161616f9] font-solid fixed z-90 inset-0 flex flex-col justify-center items-center gap-[10vh] text-3xl px-10">
        <div className="flex ml-auto">
          <button onClick={onClose} className="w-10 h-auto">
            <img src="close_btn.png" alt="close_button" />
          </button>
        </div>

        <a onClick={onClose} href="#about">
          .about
        </a>
        <a onClick={onClose} href="#projects">
          .projects
        </a>
        <button
          onClick={() => {
            setCardOpen(true);
          }}
          className="hover:cursor-pointer"
        >
          .contactMe
        </button>
      </nav>

      {cardOpen && <ProfileCard onClose={() => setCardOpen(false)} />}
    </>
  );
};

export default NavBar_Mobile;
