import "../styles/Home.css";
import "../styles/QuoteBlock.css";
import WebSection from "./WebSection";

const Home = () => {
  return (
    <main>
      <WebSection
        currentSect="Home"
        sectTitle="mind.of.soye"
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
