import Codeblock from "./Codeblock";
import HeadingWithPageTitle from "./HeadingWithPageTitle";
import QuoteBlock from "./QuoteBlock";

import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <main className="web-section">
      <div>
        <HeadingWithPageTitle
          currentSect="HOME"
          sectTitle="mind.of.soye"
          subHeading="Computer engineering student and jack of all trades"
        />
        <Codeblock
          codeText={
            <>
              {'{name = "Soye", role = "'}
              <span className="code-highlight">Programmer</span>
              {'"}'}
            </>
          }
        />
      </div>
      <div>
        <QuoteBlock />
      </div>
    </main>
  );
};
export default HomePage;
