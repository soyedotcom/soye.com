import { Link } from "react-router-dom";
import Box from "./Box";
import calcImg from '../assets/calc.png'
import rpsImg from '../assets/rps.png'
import svgImg from '../assets/svg_12359418.png'

const BentoBox = () => {
  return (
    <main className="project-container">
      <Box
        projectImg={svgImg}
        projectLink="/some-path"
        projectName="Calculator"
      />
      <Box
        projectImg={svgImg}
        projectLink="/some-path"
        projectName="Tic-Tac-Toe"
      />
      <Box
        projectImg={svgImg}
        projectLink="/some-path"
        projectName="Rock, Paper, Scissors"
      />
      <Box
        projectImg={svgImg}
        projectLink="/some-path"
        projectName="Weather App"
      />
      <Box
        projectImg={svgImg}
        projectLink="/some-path"
        projectName="Recipe Finder"
      />
      <Box
        projectImg={svgImg}
        projectLink="/some-path"
        projectName="Explore More"
      />
    </main>
  );
};
export default BentoBox;
