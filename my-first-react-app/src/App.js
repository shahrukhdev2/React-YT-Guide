import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => ++prevCount);
  };

  const decrement = () => {
    setCount((prevCount) => --prevCount);
  };

  return (
    <div className="App">
      <button type="button" onClick={decrement}>
        -
      </button>
      <input type="text" value={count} />
      <button type="button" onClick={increment}>
        +
      </button>
    </div>
  );
}

export default App;
