import React, { useEffect, useState } from 'react';

function Hello() {
  useEffect(() => {
    console.log('creacted!');

    // cleanup function
    return () => {
      console.log('destroyed!!!');
    };
  }, []);
  return <h1>Hello</h1>;
}

export default function App() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);

  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}
