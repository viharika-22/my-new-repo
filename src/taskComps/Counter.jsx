import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [countBy, setCountBy] = useState(0);

  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    fontFamily: 'Arial',
    marginTop: '2rem'
  };

  const wrapStyle = {
    display: 'flex',
    gap: '10px',
    marginTop: '10px'
  };

  const inputStyle = {
    margin: '10px',
    height: '2rem',
    width: '4rem',
    textAlign: 'center'
  };

  function addHandel() {
    setCount(prev => prev + (Number(countBy) > 0 ? Number(countBy) : 1));
  }

  function subHandel() {
    setCount(prev => prev - (Number(countBy) > 0 ? Number(countBy) : 1));
  }

  return (
    <div style={containerStyle}>
      <h3>Counter App</h3>
      <div style={containerStyle}>
        <div>{count}</div>
        <input
          type="number"
          value={countBy}
          onChange={(e) => setCountBy(e.target.value)}
          style={inputStyle}
        />
        <div style={wrapStyle}>
          <button onClick={addHandel}>Add +</button>
          <button onClick={subHandel}>Sub -</button>
        </div>
      </div>
    </div>
  );
}

export default Counter;
