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
  let [counter, setcounter] = useState(0)

  // adding value
  function addValue() {
    setcounter(counter + 1)


  }

  // removing value
  function removeCounter() {
if (counter > 0) {
  setcounter(counter - 1);
}
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
        >add value </button>
        <button
          onClick={removeCounter}
        >remove value</button>
      </div>

    </>
  )
}

export default App
