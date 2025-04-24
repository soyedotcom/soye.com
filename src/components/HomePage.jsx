import Codeblock from "./Codeblock";
import HeadingWithPageTitle from "./HeadingWithPageTitle";
import QuoteBlock from "./QuoteBlock";

import "./styles/HomePage.css";

const HomePage = () => {
  return (
    <main className="home-page">
      <div>
        <HeadingWithPageTitle />
        <Codeblock />
      </div>
      <div>
        <QuoteBlock />
      </div>
    </main>
  );
};
export default HomePage;
