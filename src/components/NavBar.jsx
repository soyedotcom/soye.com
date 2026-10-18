import { useState, useEffect } from "react";

const NavBar = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <nav className="fixed w-full flex flex-row bg-transparent font-solid">
        <a>.about</a>
        <a>.projects</a>

        <p>{time.toLocaleTimeString()}</p>
        <p>{time.toLocaleDateString()}</p>
      </nav>
    </>
  );
};

export default NavBar;
