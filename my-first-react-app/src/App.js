import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState(0);

  const increment = () => {
    setValue((prevValue) => ++prevValue);
  };

  const decrement = () => {
    setValue((prevValue) => --prevValue);
  };

  return (
    <div className="App">
      <button type="button" onClick={decrement}>
        -
      </button>
      <input type="text" value={value} />
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default App;
