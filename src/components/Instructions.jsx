import "./Instructions.css";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const Instructions = () => {
  const [instructionData, setInstructionData] = useState();
  const params = useParams();
  const idDish = params.id;

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idDish}`)
      .then((res) => res.json())
      .then((instructionData) => {
        setInstructionData(instructionData.meals[0]);
      })
      .catch((error) => {
        console.error("Fehler beim Fetch", error);
      });
  }, []);

  const formatText = instructionData?.strInstructions.split(`\r\n`);
  const absatz = formatText?.map((item, index) => (
    <div key={index} className="InstructionsAbsatz">
      <p>{item}</p> <br />
    </div>
  ));

  const youTubeURL = instructionData?.strYoutube;

  return (
    <>
      <h1 className="instructions">Instructions</h1>
      <section className="InstructionsContainer">{absatz}</section>
      <Link to={youTubeURL} className="video-btn-wrapper">
        <button className="video-btn">Video</button>
      </Link>
    </>
  );
};

export default Instructions;
