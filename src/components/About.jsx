  import WebSection from "./WebSection";

const About = () => {
  return (
    <main id="about">
      <WebSection
        currentSect="About Me"
        sectTitle="whoami"
        subHeading="Hi, I’m Soye Usoroh -- A computer engineering undergrad, builder of cool web things and dreamer of digital worlds."
        codeText={
          <>
            soye
            <span className="code-highlight">@mindofsoye:~$ </span>
            cat aboutMe.txt
          </>
        }
      />
    </main>
  );
};
export default About;
