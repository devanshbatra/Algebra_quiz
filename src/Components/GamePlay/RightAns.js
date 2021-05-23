import React from 'react';
import normalBeam from '../../Assets/img/beamBalance.png';
const RightAns = ({showRight, setShowRight, setBeam, setBallsNumber, setOldBallClass}) => {
    return (
        <div className="rightAnsCont" id={showRight} >
            <p className="hurray">Hurray! That's <span className="highlighted" >Correct!</span></p>
            <div className="verification">
                <p><span className="greenColor" >5</span>+ 2 = 7</p>
                <p>X = <span className="greenColor" >5</span></p>
            </div>
            <button className="generalBtn" id="nextBtn" onClick={()=>{
                setShowRight("");
                setBeam(normalBeam);
                setBallsNumber(0);
                setOldBallClass("");
            }} >NEXT</button>
        </div>
    );
}
export default RightAns;