import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="section-link">
          <a href="#home">Home</a>
        </li>
        <li className="section-link">
          <a href="#about">About Me</a>
        </li>
        <li className="section-link">
          <a href="#projects">Projects</a>
        </li>
        <li className="section-link">
          <a href="#contacts">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
