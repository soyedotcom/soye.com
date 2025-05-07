import "../styles/WebSection.css";
import "../styles/CodeBlock.css";
import QuoteBlock from "./QuoteBlock";
import AboutMeTxt from "./AboutMeTxt";

const WebSection = ({ currentSect, sectTitle, subHeading, codeText }) => {
  const SubSection = () => {
    switch (currentSect) {
      case "Home":
        return <QuoteBlock />;
      case "About":
        return <AboutMeTxt />;
      default:
        return <></>;
    }
  };

  return (
    <section id="home" className="web-section">
      <div>
        <h2 className="current-sect">{currentSect}</h2>
        <h1 className="sect-title">{sectTitle}</h1>
        <p className="subheading">{subHeading}</p>

        <div className="code-block">
          <p>
            <pre className="code-text">{codeText}</pre>
          </p>
        </div>
      </div>

      <SubSection />
    </section>
  );
};
export default WebSection;
