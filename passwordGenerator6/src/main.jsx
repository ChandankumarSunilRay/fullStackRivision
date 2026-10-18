import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

/*

import { useCallback, useState, useEffect, useRef } from 'react'

function Aap() {

  const [length, setLength] = useState(8)
  const [password, setPassword] = useState()
  const [noAllowed, setNoAllowed] = useState(false)
  const [symbolsAllowed, setSymbolsAllowed] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let char = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    let str = ""


    let symbols = "!@#$%^&*()_+"
    let numbers = "1234567890"

    if (noAllowed) {
      char = char + numbers
    }
    if (symbolsAllowed) {
      char = char + symbols
    }


  }, [noAllowed, setPassword, symbolsAllowed, password])

  


  return (
    <>
      <div className=' zoom-[1.7] flex flex-col borde gap-2.5 p-4 m-5 items-center '>
        <div className='flex items-center gap-4 '>
          <div className='flex gap-1.5 items-center'>
            <label htmlFor="passwordId" >Your password: </label>
            <input type="text"
              id='passwordId'
              className='border rounded-sm text-center cursor-default'
              placeholder='Password '
              readOnly />
          </div>
          <button
            className=' border cursor-pointer p-1 rounded-sm shadow-blue-400 shadow-md  bg-blue-400 hover:bg-blue-500 '

          >copy</button>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='flex gap-2 '>
            <input id='rangeId'
              type="range"
              min={6}
              max={17}
              value={length}
              onChange={(e) => {
                setLength(e.target.value)
              }
              }
            />
            <label className='w-19'>sidebar {length} </label>

          </div>
          <div className='flex gap-1'>
            <input type="checkbox"
              id="numberCheckbox"

            />
            <label className='select-none' htmlFor="numberCheckbox">Number</label>

          </div>
          <div className='flex gap-1'>
            <input type="checkbox"
              id="textCheckbox"

            />
            <label className='select-none' htmlFor="textCheckbox">Symbols</label>

          </div>
        </div>
      </div>
    </>
  )

}

export default Aap;

*/