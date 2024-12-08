import { useState } from 'react'
import './App.css'

function App() {
  const [value, setValue] = useState(0);

  return (
    <div >
      <Counter value={value} />
      <IncreaseButton setValue={setValue} value={value} />
      <DecreaseButton setValue={setValue} value={value} />
    </div>
  )
}

function Counter({ value }) {
  return <span>
    {value}
  </span>
}

function DecreaseButton({ setValue, value }) {
  function decrementHandler() {
    setValue(value - 1);
  }
  return <div>
    <button onClick={decrementHandler}>Decrease</button>
  </div>
}

function IncreaseButton({ setValue, value }) {
  function incrementHandler() {
    setValue(value + 1);
  }
  return <div>
    <button onClick={incrementHandler}>Inrease</button>
  </div>
}
export default App
