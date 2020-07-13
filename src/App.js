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
        <video width="" height="" controls >
      <source src="http://peridot.streamguys.com:7150/RFTwo" type="audio/mpeg"/>
      </video>
      <h1>Radio navtarang fiji</h1>
      <video controls>
      <source src="http://stream.fijivillage.com/navtarang" type="audio/mpeg"></source>
      </video>
      <h1>Radio Sargam</h1>
      <video controls>
      <source src="http://stream.fijivillage.com/radiosargam" type="audio/mpeg"></source>
      </video>
      </div>
      
      {/* <div>
             <h1>Radio Mirchi Fiji</h1>
      <video width="" height="" controls >
      <source src="http://peridot.streamguys.com:7150/Mirchi" type="audio/mpeg"/>
      </video>
      </div> */}
      <footer>Made By Chidoro Batkau V1.0</footer>
    </div>
  );
}

export default App;
