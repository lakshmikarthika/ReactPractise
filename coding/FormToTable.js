import { useState, useEffect } from "react";
import { Table } from "reactstrap";
import Child from "./Child";

export default function App() {
  const [person, setPerson] = useState([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");

  const submitHandler = (e) => {
    setPerson([
      ...person,
      {
        name: name,
        age: age,
        location: location,
      },
    ]);
    e.preventDefault();
  };

  const deleteHandler = (id) => {
    const filtered = person.filter((p, index) => index !== id);
    setPerson(filtered);
  };
  const sortHandler = (type) => {
    const sorted = [...person].sort((a, b) => {
      return a[type].localeCompare(b[type]);
    });
    setPerson(sorted);
  };
  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter name"
          style={{ display: "block" }}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          placeholder="Enter age"
          style={{ display: "block" }}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter location"
          style={{ display: "block" }}
          onChange={(e) => setLocation(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      <Table bordered>
        <thead>
          <tr>
            <th>
              Name <button onClick={() => sortHandler("name")}>Sort</button>
            </th>
            <th>
              Age <button onClick={() => sortHandler("age")}>Sort</button>
            </th>
            <th>
              Location
              <button onClick={() => sortHandler("location")}>Sort</button>
            </th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {person.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.location}</td>
              <td>
                <button onClick={() => deleteHandler(index)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Child person={person} />
    </div>
  );
}
