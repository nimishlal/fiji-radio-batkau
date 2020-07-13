import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className="center">Fiji Radio</h1>
      <div>
        <h1>
          Radio Fiji 2
      </h1>
        <audio width="" height="" controls >
      <source src="http://peridot.streamguys.com:7150/RFTwo" type="audio/mp3"/>
      </audio>
      <h1>Radio navtarang fiji</h1>
      <audio controls>
      <source src="http://stream.fijivillage.com/navtarang" type="audio/mp3"></source>
      </audio>
      <h1>Radio Sargam</h1>
      <audio controls>
      <source src="http://stream.fijivillage.com/radiosargam" type="audio/mp3"></source>
      </audio>
      </div>
      
      {/* <div>
             <h1>Radio Mirchi Fiji</h1>
      <video width="" height="" controls >
      <source src="http://peridot.streamguys.com:7150/Mirchi" type="audio/mpeg"/>
      </video>
      </div> */}
      <footer className="colorFooter">Made By Chidoro Batkau V1.0 MixKarDo</footer>
    </div>
  );
}

export default App;
