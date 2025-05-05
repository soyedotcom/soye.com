import "./styles/Taskbar.css";

const Taskbar = () => {
  const showSideBar = () => {
    const sidebar = document.querySelector(".navbar");

    sidebar.classList.toggle("active");
  };
  return (
    <>
      <div className="taskbar">
        <div className="taskbar-sections">
          <div>
            <a href="/soye.com/App.jsx" className="logo">
              M.O.S
            </a>
          </div>
          <div>
            <button className="menu-button" onClick={showSideBar}>
              <img
                className="menu-icon"
                src="/soye.com/menu_2.svg"
                alt="menu"
              />
            </button>
          </div>
        </div>

        <hr />
      </div>
    </>
  );
};
export default Taskbar;
