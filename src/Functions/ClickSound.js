import Click from '../Assets/audio/click.mp3';
export default function ClickSoundHandler(){
    const ClickSound = new Audio(Click);
    ClickSound.play();
  }