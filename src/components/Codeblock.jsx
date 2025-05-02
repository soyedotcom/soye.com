import "./styles/Codeblock.css";

const Codeblock = ({ codeText }) => {
  return (
    <div className="code-container">
      <p>
        <pre className="code-text">{codeText}</pre>
      </p>
    </div>
  );
};
export default Codeblock;
