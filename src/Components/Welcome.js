import React from 'react';
import { useHistory } from 'react-router-dom';

export default function Welcome(props){

    const history = useHistory();
    function handleStartClick(){
        props.playAudio();
        history.push("/start");
    }

    return(
        <div className="welcome">
            <p>Click to Start the Assessment...</p>
            <button className="startButton" onClick = {()=>{handleStartClick()}}>START Algebra Assignment</button>
               
            </div>
    )
}