import { useState, useEffect } from "react";

export default function App() {
  const list = ["play", "dance", "watch"];
  const [newList, setNewList] = useState(list);
  const [checkedItems, setCheckedItems] = useState([]);
  const handleDelete = (id) => {
    const filtered = newList.filter((li, index) => index !== id);
    setNewList(filtered);
  };
  const handleCheckbox = (index) => {
    const newCheckeditems = [...checkedItems];
    newCheckeditems[index] = !newCheckeditems[index];
    setCheckedItems(newCheckeditems);
  };
  return (
    <div className="App">
      <ul>
        {newList.map((item, index) => (
          <li key={index} style={{ listStyleType: "none" }}>
            <input type="checkbox" onChange={() => handleCheckbox(index)} />
            {item}
            {checkedItems[index] && (
              <button onClick={() => handleDelete(index)}>Delete</button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
