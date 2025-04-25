import "./styles/Codeblock.css";
import PropTypes from "proptypes";

const Codeblock = ({ codeText }) => {
  return (
    <div className="code-container">
      <p className="code-text">
        <pre>{codeText}</pre>
      </p>
    </div>
  );
};
export default Codeblock;
