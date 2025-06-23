import { Link } from "react-router-dom";
import "../styles/BentoBox.css";

const Box = ({ projectImg, projectName, projectLink }) => {
  return (
    <>
      <Link to={projectLink}>
        <div className="box">
          <img src={projectImg} alt="preview" />
          <p>{projectName}</p>
        </div>
      </Link>
    </>
  );
};

export default Box;
