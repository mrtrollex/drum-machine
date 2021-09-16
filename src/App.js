import React, { useState } from 'react';
import pads from './components/pads';
import Pad from './components/padButton';
import GtaStyle from './components/GtaStyle';
import titleImage from './assets/images/drummachinetitle.png';
import Display from './components/Display';
import './App.css';

function App() {
  const [display, setDisplay] = useState('Lets play');

  return (
    <React.Fragment>
      <div className="App">
        <img className="titleImage" src={titleImage} alt="DrumMachineTitle" />
        <GtaStyle />
        <Display display={display} />
        <div className="padsContainer">
          {pads.map((clip) => (
            <Pad setDisplay={setDisplay} clip={clip} />
          ))}
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
