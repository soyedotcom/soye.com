import { Link } from "react-router-dom";
import Box from "./Box";
import calcImg from '../assets/calc.png'
import rpsImg from '../assets/rps.png'

const BentoBox = () => {
  return (
    <main className="project-container">
      <Box
        projectImg={calcImg}
        projectLink="/some-path"
        projectName="Calculator"
      />
      <Box
        projectImg="img.png"
        projectLink="/some-path"
        projectName="Tic-Tac-Toe"
      />
      <Box
        projectImg={rpsImg}
        projectLink="/some-path"
        projectName="Rock, Paper, Scissors"
      />
      <Box
        projectImg="img.png"
        projectLink="/some-path"
        projectName="Weather App"
      />
      <Box
        projectImg="img.png"
        projectLink="/some-path"
        projectName="Recipe Finder"
      />
      <Box
        projectImg="img.png"
        projectLink="/some-path"
        projectName="Explore More"
      />
    </main>
  );
};
export default BentoBox;
