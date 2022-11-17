import { useState } from "react";
export default function Child({ getData }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const clickHandler = (e) => {
    e.preventDefault();
    getData({ username, password });
  };
  return (
    <>
      <form>
        <label>Username</label>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <label>Password</label>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <button onClick={clickHandler}>Login</button>
      </form>
    </>
  );
}
