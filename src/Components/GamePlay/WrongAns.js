import React from 'react';
import normalBeam from '../../Assets/img/beamBalance.png';

const WrongAns = ({ansGiven, showWrong, setShowWrong, setBeam, setBallsNumber, setOldBallClass}) => {
    return (
        <div className="wrongAnsCont" id={showWrong}>
            <p className="tryAgain">Try Again!</p>
            <div className="verification">
                <p><span className="redColor" >{ansGiven}</span>+ 2 &ne; 7</p>
                <p>X &ne; <span className="redColor" >{ansGiven}</span></p>
            </div>
            <button className="generalBtn" id="prevBtn" onClick={()=>{
                setShowWrong("");
                setBeam(normalBeam);
                setBallsNumber(0);
                setOldBallClass("");
            }} >Prev</button>
        </div>
    );
}
export default WrongAns;