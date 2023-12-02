import './App.css';
import { NucleusButton, defineCustomElements } from 'nucleus-react';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <NucleusButton buttontype='primary'>Primary Button</NucleusButton>
      <NucleusButton buttontype='callToAction'>Call to Action</NucleusButton>
      <NucleusButton buttontype='outline'>Outline</NucleusButton>
      <NucleusButton buttontype='text'>Text</NucleusButton>
    </div>
  );
}

export default App;