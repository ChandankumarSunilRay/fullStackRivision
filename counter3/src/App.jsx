import './App.css';
import {
  useState,
  useEffect,
  useContext,
  useRef,
  useMemo,
  useCallback,
  useReducer,
  useLayoutEffect
} from 'react';

function App() {
  let [counter,setcounter]=useState(0)

  function addValue(){
    console.log(counter)
    setcounter(counter+1)
    console.log(counter)

  }
  

  // this only prints it's value to console it doesn't update in ui--------------------
  // let counter = 0;
  // function addValue(){
  //   counter = counter + 1
  //   console.log(counter)
  // }


  return (
    <>
      <h1 className='counter'>Counter</h1>
      <h2 className='counter'>Value : {counter}</h2>
      <br />
      <div style={{ textAlign: "center" }}>
        <button
          onClick={addValue}
        >add value : {counter} </button>
        <button>remove value : {counter} </button>
      </div>

    </>
  )
}

export default App
