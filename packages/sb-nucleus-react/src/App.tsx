import './App.css';
import { NucleusButton, defineCustomElements } from 'nucleus-react';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <NucleusButton buttontype='default'>Default Button</NucleusButton>
      <NucleusButton buttontype='light'>Light</NucleusButton>
      <NucleusButton buttontype='dark'>Dark</NucleusButton>
    </div>
  );
}

export default App;