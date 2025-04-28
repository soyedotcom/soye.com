import AboutBlock from "./AboutBlock";
import Codeblock from "./Codeblock";
import HeadingWithPageTitle from "./HeadingWithPageTitle";
import ProjectBentoBox from "./ProjectBentoBox";

const Projects = () => {
  return (
    <main className="web-section">
      <div>
        <HeadingWithPageTitle
          currentSect="PROJECTS"
          sectTitle="soyes.sandbox"
          subHeading="I don’t have any certifications (yet) but here’s a digital playground of projects I’ve made so far. Just lines of code and lots of late-night builds."
        />
        <Codeblock
          codeText={
            <>
              interested?
              <span className="code-highlight"> loadProjects() </span>:
              backToHome();
            </>
          }
        />
      </div>
      <div>
        <ProjectBentoBox />
      </div>
    </main>
  );
};
export default Projects;
