import React, {useState} from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [inputVal, setInputVal] = useState('')
  const [list, setList] = useState([])
  const clickHandler = () => {
    setList([...list, inputVal])
  }
  const sortHandler = () => {
    setList([...list].sort())
  }
  return (
    <div className="App">
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={clickHandler}>save</button>
      <ul>
        {list.map((li) => (
          <li>{li}</li>
        ))}
      </ul>
      <button onClick={sortHandler}>sort</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
