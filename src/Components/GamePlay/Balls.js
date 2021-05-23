import React from 'react';

const Balls = ({number}) => {
    console.log(number);
    let ballArray=[];
    let i=0;
    for(i=0; i<number; i++){
        ballArray.push(1);
    }

    return (
        <div className="ballsCont">
            {ballArray.map(()=>(
                <div className="smallBlueBall"></div>
            ))}
        </div>
    );
}
export default Balls;