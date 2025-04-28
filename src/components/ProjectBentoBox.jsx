import "./styles/ProjectBentoBox.css";

const ProjectBentoBox = () => {
  return (
    <main className="project-container">
      <section style={{ gridArea: "box-1" }} className="box"></section>
      <section style={{ gridArea: "box-2" }} className="box"></section>
      <section style={{ gridArea: "box-3" }} className="box"></section>
      <section style={{ gridArea: "box-4" }} className="box"></section>
      <section style={{ gridArea: "box-5" }} className="box"></section>
      <section style={{ gridArea: "box-6" }} className="box"></section>
      <section style={{ gridArea: "box-7" }} className="box"></section>
      <section style={{ gridArea: "box-8" }} className="box"></section>
    </main>
  );
};
export default ProjectBentoBox;
