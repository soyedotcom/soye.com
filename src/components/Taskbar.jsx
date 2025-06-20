import "../styles/Taskbar.css";
import { Link } from "react-router-dom";

const Taskbar = () => {
  const showMenu = () => {
    const menu = document.querySelector(".navbar");
    menu.classList.toggle("active");
  };

  return (
    <div class="fixed top-0 left-0 right-0 z-[100] max-w-full bg-white">
      <header class="flex justify-between items-center border-b border-black">
        <div>
          <Link to="/" class="text-[1.5rem] cursor-pointer ml-[3vw]">
            soye.com
          </Link>

          {/* <a href="https://mind-of-soye.github.io/soye.com/" className="logo">
            soye.com
          </a> */}
        </div>

        <div>
          <button
            class="text-[1.5rem] mr-[3vw] hidden max-[75rem]:block"
            onClick={showMenu}
          >
            .menu
          </button>
        </div>
      </header>
    </div>
  );
};
export default Taskbar;
