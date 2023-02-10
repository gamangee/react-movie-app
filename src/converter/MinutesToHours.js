import React, { useState } from 'react';

export default function MinutesToHours() {
  const [amount, setAmount] = useState(0);
  const [invert, setInvert] = useState(false);

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const onReset = () => {
    setAmount(0);
  };

  const onFlip = () => {
    onReset();
    setInvert((prev) => !prev);
  };

  return (
    <div>
      <h3>Minutes To Hours</h3>
      <div>
        <label htmlFor='minutes'>Minutes</label>
        <input
          id='minutes'
          type='number'
          placeholder='Minutes'
          value={invert ? amount * 60 : amount}
          onChange={amountHandler}
          disabled={invert}
        />
      </div>
      <div>
        <label htmlFor='hours'>Hours</label>
        <input
          id='hours'
          type='number'
          placeholder='Hours'
          value={invert ? amount : Math.round(amount / 60)}
          onChange={amountHandler}
          disabled={!invert}
        />
      </div>
      <button onClick={onReset}>Reset</button>
      <button onClick={onFlip}>{invert ? 'Turn back' : 'Invert'}</button>
    </div>
  );
}
