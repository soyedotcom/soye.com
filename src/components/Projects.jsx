import ProjectFolder from "./ProjectFolder";

const Projects = () => {
  return (
    <>
      <section id="projects" className="section">
        <p className="font-bold ">
          Projects | *sigh* so much to do and yet so little time
        </p>

        <h1 className="font-bold text-[#0000006c] text-2xl">
          I'm always working on something new. I enjoy creating things and
          finding ways to bring my ideas to life with art and coding. I dabble
          in everything from fullstack web development to mobile and desktop
          applications, games, embedded systems and even 3D modelling.
        </h1>

        <section className="flex flex-col h-full gap-[3vh] mt-[5vh] md:flex-row md:justify-center md:gap-[5vw]">
          <ProjectFolder bg="red" folderName="Software Development" />

          <ProjectFolder bg="blue" folderName="Embedded Systems" />

          <ProjectFolder bg="green" folderName="3D Modelling" />
        </section>
      </section>
    </>
  );
};

export default Projects;
