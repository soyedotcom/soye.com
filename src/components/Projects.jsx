import WebSection from "./WebSection";

const Home = () => {
  return (
    <main id="projects">
      <WebSection
        currentSect="Projects"
        sectTitle="the sandbox"
        subHeading="I don’t have any certifications (yet) but here’s a digital playground of projects I’ve made so far. Just lines of code and lots of late-night builds."
        codeText={
          <>
            interested?
            <span className="code-highlight"> loadProjects() </span>:
            backToHome();
          </>
        }
      />
    </main>
  );
};
export default Home;
