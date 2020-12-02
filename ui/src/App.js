import React, { useState } from 'react';
import Status from './components/Status';
import SwitchButton from './components/SwitchButton';
import TodayCounter from './components/TodayCounter';
import './App.css';

function App() {
  const [isWorking, setIsWorking] = useState(false);
  const onWorkStatusChange = (status) => {
    console.log(`[App] Received working status: ${status}`);
    setIsWorking(status);
  }

  return (
    <div className="App">
      <Status isWorking={isWorking} />
      <SwitchButton setVariable={onWorkStatusChange} />
      <TodayCounter />
    </div>
  );
}

export default App;
