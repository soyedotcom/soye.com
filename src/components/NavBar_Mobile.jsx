const NavBar_Mobile = ({ onClose }) => {
  return (
    <>
      <nav className="bg-[#161616f9] font-solid fixed z-90 inset-0 flex flex-col justify-center items-center gap-[10vh] text-3xl">
        <a onClick={onClose} href="#about">
          .about
        </a>
        <a onClick={onClose} href="#projects">
          .projects
        </a>
        <button onClick={onClose} className="hover:cursor-pointer">
          .contactMe
        </button>
      </nav>
    </>
  );
};

export default NavBar_Mobile;
