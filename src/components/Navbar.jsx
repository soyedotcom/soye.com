import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <a href="#home">
          <li className="section-link">Home</li>
        </a>
        <a href="#about">
          <li className="section-link">About Me</li>
        </a>
        <a href="#projects">
          <li className="section-link">Projects</li>
        </a>
        <a href="#contact">
          <li className="section-link">Say Hello</li>
        </a>
      </ul>
    </nav>
  );
};
export default Navbar;
