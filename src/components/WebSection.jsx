import "../styles/WebSection.css";
import "../styles/CodeBlock.css";
import QuoteBlock from "./QuoteBlock";



const WebSection = ({ currentSect, sectTitle, subHeading, codeText }) => {
  return (
    <section id="home" className="web-section">
      <h2 className="current-sect">{currentSect}</h2>
      <h1 className="sect-title">{sectTitle}</h1>
      <p className="subheading">{subHeading}</p>

      <div className="code-block">
        <p>
          <pre className="code-text">{codeText}</pre>
        </p>
      </div>
    </section>
  );
};
export default WebSection;
