import {useState} from 'react';
function App() {
  const employees = [
    {
      name: 'lakshmi',
    },
    {
      name: 'karthi',
    }
  ]
  const [data,setData] = useState(employees);
  const [updatedData,setUpdatedData] = useState([]);
  const changeHandler = (e,index) => {
    let newArr = data.map((newData,activeIndex)=> index === activeIndex ? {name: e.target.value} : newData)
    setData(newArr);
  }
  return (
    <div className="App">
      <form>
          {data.map((emp,index)=> (
            <div>
              <input type="text" onChange={(e)=> changeHandler(e,index)} value={emp.name}/>
            </div>
          ))}
      </form>
      <button onClick={()=>setUpdatedData(data)}>Update</button>
      {updatedData.map((emp,index)=> (
            <div>
              <p>{emp.name}</p>
            </div>
          ))}
    </div>
  );
}

export default App;
