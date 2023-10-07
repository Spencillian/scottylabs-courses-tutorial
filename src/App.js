import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [pressed, setPressed] = useState(false);

  // {
  //   pressed,
  //   setPressed(modVale);
  // }

  if (pressed) {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Pressed
          </p>
          <button onClick={() => setPressed(!pressed)}>
            Click Me!
          </button>
        </header>
      </div>
    );
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello scottylabs
        </p>
        <button onClick={() => setPressed(!pressed)}>
          Click Me!
        </button>
      </header>
    </div>
  );
}

export default App;
