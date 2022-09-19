import React from 'react';
import './App.css';

import { TuringMachine } from './components/TuringMachine';
import { TuringMachineProvider } from './context';



function App() {
  return (
    <div className="App">
      <TuringMachineProvider>
        <TuringMachine />
      </TuringMachineProvider>
    </div>
  );
}

export default App;
