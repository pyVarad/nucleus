import './App.css';
import { MyComponent, defineCustomElements } from 'nucleus-react';

defineCustomElements();

function App() {
  return (
    <div className="App">
      <MyComponent first="Varad" last="A G" />
    </div>
  );
}

export default App;