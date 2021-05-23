import React, {useRef, useEffect} from 'react';
import { Link} from 'react-router-dom';
import { TimelineLite } from 'gsap';
import boy from '../Assets/img/boy.png';
import girl from '../Assets/img/girl.png';
import ClickSoundHandler from '../Functions/ClickSound';


function Start(props){
  let algebraHeading = useRef(null);
  let askHelp = useRef(null);
  let startButton = useRef(null);


  
  let t1 = new TimelineLite();
  useEffect(()=>{
    t1
    .fromTo(algebraHeading, 2, {opacity: 0}, {opacity: 1}, "+=1")
    .fromTo(askHelp, 1,  {opacity: 0}, {opacity: 1})
    .fromTo(startButton, 1, {opacity: 0}, {opacity: 1})
    
    
  },[]);


  return(
    <div className="startCont">
        <div className="boyDiv">
            <img id="boy" src={boy} alt="boy" />
        </div>
        <div className="girlDiv">
            <img id="girl" src={girl} alt="girl" />
        </div>
        <div className="instruction">
            <h1 id="algebraHeading" ref={el=> algebraHeading=el }  >Algebra</h1>
            <p id="askHelp" ref={el=> askHelp=el } >Can you help Jack and Diane as they learn to balance equations using algebra?</p>
        </div>
        <Link to='/play' ><button className="startButton" ref={el=> startButton=el} onClick={()=> ClickSoundHandler() } >START</button></Link>
    </div>
  );
}

export default Start;