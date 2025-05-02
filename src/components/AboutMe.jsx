import AboutBlock from "./AboutBlock";
import Codeblock from "./Codeblock";
import HeadingWithPageTitle from "./HeadingWithPageTitle";
import QuoteBlock from "./QuoteBlock";

import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <main className="web-section" id="about">
      <div>
        <HeadingWithPageTitle
          currentSect="ABOUT ME"
          sectTitle="whoami"
          subHeading="Hi, I'm Soye Usoroh -- A computer engineering undergrad, builder of cool web things and dreamer of digital worlds."
        />
        <Codeblock
          codeText={
            <>
              soye
              <span className="code-highlight">@mindofsoye:~$ </span>
              cat aboutMe.txt
            </>
          }
        />
      </div>
      <div>
        <AboutBlock />
      </div>
    </main>
  );
};
export default HomePage;
