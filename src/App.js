import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';

// importing compoonents
import Start from './Components/Start';
import Gameplay from './Components/Gameplay';
import Welcome from './Components/Welcome';

import BackgroundAudio from './Assets/audio/background.mp3';

const App = () => {

  const playAudioFromWelcome = () => {
    const music = new Audio(BackgroundAudio);
    music.play();
    music.addEventListener("ended", ()=>{
      music.currentTime=0;
      music.play();
    });
    console.log('Play Audio called');

  }
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact render={() => <Welcome playAudio={playAudioFromWelcome} />} />
          <Route path="/Start" exact component={Start} />
          <Route path="/play" exact component={Gameplay} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;