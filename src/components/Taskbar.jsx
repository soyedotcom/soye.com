import "../styles/Taskbar.css";

const Taskbar = () => {
  const showMenu = () => {
    const menu = document.querySelector(".navbar");
    menu.classList.toggle("active");
  };

  return (
    <div className="taskbar-container">
      <header className="taskbar">
        <div>
          <a href="https://mind-of-soye.github.io/soye.com/" className="logo">
            soye.com
          </a>
        </div>

        <div>
          <button className="menu-button" onClick={showMenu}>
            .menu
          </button>
        </div>
      </header>
    </div>
  );
};
export default Taskbar;
