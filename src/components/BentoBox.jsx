import "../styles/BentoBox.css";
import { Link } from "react-router-dom";

const BentoBox = () => {
  return (
    <main className="project-container">
      <Link to="/" style={{ gridArea: "box-1" }} className="box">
        <section></section>
      </Link>
      <Link to="/" style={{ gridArea: "box-1" }} className="box">
        <section></section>
      </Link>
      <Link to="/" style={{ gridArea: "box-1" }} className="box">
        <section></section>
      </Link>
      <Link to="/" style={{ gridArea: "box-2" }} className="box">
        <section></section>
      </Link>
      <Link to="/" style={{ gridArea: "box-3" }} className="box">
        <section></section>
      </Link>
      <Link to="/" style={{ gridArea: "box-4" }} className="box">
        <section></section>
      </Link>
      <Link to="/" style={{ gridArea: "box-5" }} className="box">
        <section></section>
      </Link>
      <Link to="/" style={{ gridArea: "box-6" }} className="box">
        <section></section>
      </Link>
      <Link to="/" style={{ gridArea: "box-7" }} className="box">
        <section></section>
      </Link>
      <Link to="/" style={{ gridArea: "box-8" }} className="box">
        <section></section>
      </Link>

      {/* <a href="" style={{ gridArea: "box-1" }} className="box">
        <section></section>
      </a> 

      <a href="" style={{ gridArea: "box-2" }} className="box">
        <section></section>
      </a>
      <a href="" style={{ gridArea: "box-3" }} className="box">
        <section></section>
      </a>
      <a href="" style={{ gridArea: "box-4" }} className="box">
        <section></section>
      </a>
      <a href="" style={{ gridArea: "box-5" }} className="box">
        <section></section>
      </a>
      <a href="" style={{ gridArea: "box-6" }} className="box">
        <section></section>
      </a>
      <a href="" style={{ gridArea: "box-7" }} className="box">
        <section></section>
      </a>
      <a href="" style={{ gridArea: "box-8" }} className="box">
        <section></section>
      </a> */}
    </main>
  );
};
export default BentoBox;
