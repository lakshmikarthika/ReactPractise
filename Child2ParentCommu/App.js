import React, { useState } from 'react';
import Child from './Child';

export default function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <h2>Clicked {count} times</h2>
      <Child onclick={increment} />
    </div>
  );
}
