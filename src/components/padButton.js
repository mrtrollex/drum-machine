import React, { useEffect, useState } from 'react';
import '../styles/buttonsStyle.scss';

export default function Pad({ clip, setDisplay }) {
  const [activeButton, setActiveButton] = useState(false);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    }; // eslint-disable-next-line
  }, []);

  const handleKeyPress = (e) => {
    if (e.keyCode === clip.keyCode) {
      playAudio();
    }
  };

  const playAudio = () => {
    const audioTag = document.getElementById(clip.keyTrigger);
    setActiveButton(true);
    setTimeout(() => setActiveButton(false), 200);
    audioTag.currentTime = 0;
    audioTag.play();
    setDisplay(clip.id);
  };

  return (
    <button
      onClick={playAudio}
      className={`buttons ${activeButton && 'buttonActive'}`}
    >
      <audio id={clip.keyTrigger} src={clip.audio} />
      <div className="font-effect-neon padKeys">{clip.keyTrigger}</div>
    </button>
  );
}
