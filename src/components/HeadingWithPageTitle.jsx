import "./styles/HeadingWithPageTitle.css";

const HeadingWithPageTitle = ({ currentSect, sectTitle, subHeading }) => {
  return (
    <div className="container">
      <h2 className="current-sect">{currentSect}</h2>
      <h1 className="sect-title">{sectTitle}</h1>
      <p className="subheading">{subHeading}</p>
    </div>
  );
};
export default HeadingWithPageTitle;
