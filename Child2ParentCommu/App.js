import Login from "./Login";
import "./styles.css";
import { useState } from "react";

export default function App() {
  const [data, getData] = useState({});
  return (
    <div className="App">
      <h3>Child 2 Parent</h3>
      <p>username is {data["username"]}</p>
      <p>password is is {data.password}</p>
      <Login getData={getData} />
    </div>
  );
}
