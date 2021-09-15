import React, { useState } from 'react';

function Child({onclick}) {
  return (
    <div >
      <button onClick={onclick}>Increment</button>
    </div>
  );
}
export default Child;
