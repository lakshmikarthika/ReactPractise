import { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setUserData(res.data);
    });
  }, []);
  return (
    <div className="App">
      <p>welcome</p>
      {userData.map((data, index) => (
        <div key={index}>
          <h3>{data.name}</h3>
          <p>{data.company.name}</p>
        </div>
      ))}
    </div>
  );
}
