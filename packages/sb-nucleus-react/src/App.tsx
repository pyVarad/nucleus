import './App.css';
import { NucleusButton, defineCustomElements } from 'nucleus-react';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <NucleusButton buttontype='primary'>Primary</NucleusButton>
      <NucleusButton buttontype='secondary'>Secondary</NucleusButton>
      <NucleusButton buttontype='primary' rounded>Primary Rounded</NucleusButton>
    </div>
  );
}

export default App;