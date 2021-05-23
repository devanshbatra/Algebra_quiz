import React, { useEffect, useState } from 'react';
import boy from '../Assets/img/boy.png';
import girl from '../Assets/img/girl.png';
import TableSetup from "./GamePlay/TableSetup";
import RightAns from './GamePlay/RightAns';
import WrongAns from './GamePlay/WrongAns';
import normalBeam from '../Assets/img/beamBalance.png';
import balancedBeam from '../Assets/img/balancedBeam.png';
import unBalancedBeam from '../Assets/img/unBalancedBeam.png';

// audio
import RightAnsSound from '../Assets/audio/correctAnswer.mp3';
import WrongAnsSound from '../Assets/audio/wrongAnswer.mp3';

import Swipe from '../Assets/audio/swipe.mp3';

function Gameplay() {

  const [ansGiven, setAnsGiven] = useState(null);
  const [showRight, setShowRight] = useState("");
  const [showWrong, setShowWrong] = useState("");
  const [beam, setBeam] = useState(normalBeam);
  const [ballsNumber, setBallsNumber] = useState(0);
  const [oldBallClass, setOldBallClass] = useState("appear");
  const rightAnsSound = new Audio(RightAnsSound);
  const wrongAnsSound = new Audio(WrongAnsSound);

  useEffect(()=>{
    const slide = new Audio(Swipe);
    slide.play();
  },[]);

  const checkAnswer = (el) => {

    setTimeout(() => {
      if (el === 5) {
        setBeam(balancedBeam);
        setTimeout(() => {
          setAnsGiven(el);
          setShowRight("appear");
          rightAnsSound.play();
          console.log("right", showRight);
        }, 1500);
      } else {
        setBeam(unBalancedBeam);
        setTimeout(() => {
          setAnsGiven(el);
          setShowWrong("appear");
          wrongAnsSound.play();
          console.log("wrong", showWrong);
        }, 1500);
      }
    }, 2500);
  }

  return (
    <div className="GameplayCont">
      <div className="boyDivPlay">
        <img id="boy" src={boy} alt="boy" />
      </div>
      <div className="girlDivPlay">
        <img id="girl" src={girl} alt="girl" />
      </div>
      <div className="eqCont">
        <p className="equation">X + 2 = 7</p>
        <p className="soln">X = ?</p>
      </div>
      <TableSetup checkAnswer={checkAnswer} beam={beam} setBeam={setBeam} ballsNumber={ballsNumber} setBallsNumber={setBallsNumber} oldBallClass={oldBallClass} setOldBallClass={setOldBallClass}/>
      <RightAns showRight={showRight} setShowRight={setShowRight} beam={beam} setBeam={setBeam} setBallsNumber={setBallsNumber} setOldBallClass={setOldBallClass} />
      <WrongAns ansGiven={ansGiven} showWrong={showWrong} setShowWrong={setShowWrong} beam={beam} setBeam={setBeam} setBallsNumber={setBallsNumber} setOldBallClass={setOldBallClass} />
    </div>
  );
}

export default Gameplay;