import "../styles/Navbar.css";

const closeMenu = () => {
  const menu = document.querySelector(".navbar");

  setTimeout(() => {
    menu.classList.remove("active");
  }, 500);
};

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <a href="#home" className="link" onClick={closeMenu}>
          <li className="section-link">Home</li>
        </a>
        <a href="#about" className="link" onClick={closeMenu}>
          <li className="section-link">About Me</li>
        </a>
        <a href="#projects" className="link" onClick={closeMenu}>
          <li className="section-link">Projects</li>
        </a>
        <a href="#contact" className="link" onClick={closeMenu}>
          <li className="section-link">Say Hello</li>
        </a>
      </ul>
    </nav>
  );
};
export default Navbar;
