import { useState } from 'react'
import { RecoilRoot, atom, useRecoilValue, useSetRecoilState } from 'recoil'
import { counterAtom } from './store/atoms/counter'
import './App.css'

function App() {


  return (
    <div >
      <RecoilRoot>
        <Counter />
      </RecoilRoot>
    </div>
  )
}

function Counter() {
  return <div>
    <CurrentCount />
    <IncreaseButton />
    <DecreaseButton />
  </div>
}

function CurrentCount() {
  const value = useRecoilValue(counterAtom);
  return <span>
    {value}
  </span>
}

function DecreaseButton() {
  const setValue = useSetRecoilState(counterAtom);
  function decrementHandler() {
    setValue(c => c - 1);
  }
  return <div>
    <button onClick={decrementHandler}>Decrease</button>
  </div>
}

function IncreaseButton() {
  const setValue = useSetRecoilState(counterAtom);
  function incrementHandler() {
    setValue(c => c + 1);
  }
  return <div>
    <button onClick={incrementHandler}>Inrease</button>
  </div>
}
export default App
