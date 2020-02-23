import React from 'react';
import './App.css';
import Main from './component/main';

function App() {
  return (
    <div className="App">
      <div className="app-container">
        <canvas id="bird-game" height="640" width="480"></canvas>
        <Main/>
      </div>
    </div>
  );
}

export default App;
