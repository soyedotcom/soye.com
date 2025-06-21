import "../styles/QuoteBlock.css";
import WebSection from "./WebSection";

const Home = () => {
  return (
    <main id="home">
      <WebSection
        currentSect="Home"
        sectTitle="soyedotcom"
        subHeading="Computer engineering student and jack of all trades"
        codeText={
          <>
            {'{name = "Soye", role = "'}
            <span className="code-highlight">Programmer</span>
            {'"}'}
          </>
        }
      />
    </main>
  );
};
export default Home;
