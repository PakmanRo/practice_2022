import './index.scss';
import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  const onClickplus = () => {
    setCount(count + 1);
  }

  const onClickminus = () => {
    setCount(count - 1);
  }

  return (
    <div className="App">
      <div>
        <h2>Счетчик:</h2>
        <h1>{count}</h1>
        <button onClick = {onClickminus} className="minus">- Минус</button>
        <button onClick = {onClickplus} className="plus">Плюс +</button>
      </div>
    </div>
  );
}

export default App;
