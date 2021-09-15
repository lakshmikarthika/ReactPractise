import React, { useEffect, useState } from 'react';
import './style.css';

export default function App() {
  const [user, setUser] = useState([]);
  const [click, setClick] = useState(false);
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setUser(data);
      });
  }, []);
  const clickHandler = () => {
    setClick(!click);
  };
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={clickHandler}>
        {click ? 'Hide Users' : 'Show Users'}
      </button>
      {click && user.map(d => <p>welcome {d.username}</p>)}
    </div>
  );
}
