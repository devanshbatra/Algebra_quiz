import React, { useState } from 'react';
import RedBall from './RedBall';
import Balls from './Balls';
import BeamBalanceSound from '../../Assets/audio/beamBalanceMovement.mp3';
import ClickSoundHandler from '../../Functions/ClickSound';

function TableSetup({ checkAnswer, beam, setBallsNumber, ballsNumber, setOldBallClass, oldBallClass }) {

  const [options, setOptions] = useState([2, 3, 5, 8]);
  const beamBalanceSound = new Audio(BeamBalanceSound);


  const optionClickHandler=(el)=>{
    ClickSoundHandler();
    beamBalanceSound.play();
    setOldBallClass("disappear");
    setTimeout(()=>{
      setBallsNumber(el+2);
    }, 500);
    checkAnswer(el);
  }

  return (
    <div className="tableSetupCont" >
      <div className="ballCont">
        <div className="unknownSide">
          <div className={`unknownBalls ${oldBallClass}`}>
            <div className="unknownRed">
              <RedBall />
              <RedBall />
            </div>
            <div className="blueBall">X</div>
          </div>

          <Balls number={ballsNumber} />
        </div>

        <div className="knownSide">
          <RedBall />
          <RedBall />
          <RedBall />
          <RedBall />
          <RedBall />
          <RedBall />
          <RedBall />
        </div>
      </div>
      <img src={beam} alt="beamBalance" id="beam" />

      <div className="tableCover">

      </div>
      <div className="table">
        <p className="inTableQues" >Pick out the correct solution from the given values.</p>
        <div className="options">
          {options.map((el) => (
            <div className="optionBtn" onClick={() => optionClickHandler(el)}>{el}</div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableSetup;