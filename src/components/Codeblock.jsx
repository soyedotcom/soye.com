import "./styles/Codeblock.css";

const Codeblock = () => {
  return (
    <div className="code-container">
      <p className="code-text">
        &#123;name = "Soye", role = "
        <span className="code-highlight">Programmer</span>
        "&#125;
      </p>
    </div>
  );
};
export default Codeblock;
