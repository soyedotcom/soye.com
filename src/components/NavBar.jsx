import "./styles/NavBar.css";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li className="section-link">
          <a href="">Home</a>
        </li>
        <li className="section-link">
          <a href="">About Me</a>
        </li>
        <li className="section-link">
          <a href="">Projects</a>
        </li>
        <li className="section-link">
          <a href="">Contact</a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;
