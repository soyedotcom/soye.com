import { useState, useEffect, useRef } from "react";
import "./styles/Codeblock.css";

const Codeblock = () => {
  const index = useRef(0);
  const roles = ["Programmer", "Artist", "Gamer", "Student"];
  const [role, setrole] = useState(roles[3]);

  useEffect(() => {
    const interval = setInterval(() => {
      index.current = (index.current + 1) % roles.length;
      setrole(roles[index.current]);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="code-container">
      <p className="code-text">
        &#123;name = "Soye", role = "
        <span className="code-highlight">{role}</span>
        "&#125;
      </p>
    </div>
  );
};
export default Codeblock;
