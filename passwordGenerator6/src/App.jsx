import { useCallback, useState, useEffect, useRef } from 'react'

function Aap() {

  const [length, setLength] = useState(8)
  const [password, setPassword] = useState("")
  const [noAllowed, setNoAllowed] = useState(false)
  const [symbolsAllowed, setSymbolsAllowed] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (noAllowed) str += "0123456789"
    if (symbolsAllowed) str += "!@#$%^&*()_+"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, noAllowed, symbolsAllowed])

  //useeffect----------
  useEffect(() => {
    passwordGenerator()
  }, [passwordGenerator])

  //useref----------------
  let passwordRef = useRef(null)

  // copy password----------to clipboard
  let copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)

  }, [password])



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
              ref={passwordRef}
              value={password}
              readOnly />
          </div>
          <button
            className=' border cursor-pointer p-1 rounded-sm shadow-blue-400 shadow-md  bg-blue-400 hover:bg-blue-500 '
            onClick={copyPasswordToClipboard}

          >copy</button>
        </div>
        <div className='flex flex-row gap-4'>
          <div className='flex gap-2 '>
            <input id='rangeId'
              type="range"
              min={6}
              max={17}
              value={length}
              onChange={(e) => setLength(Number(e.target.value))}

            />
            <label className='w-19'>sidebar {length} </label>

          </div>
          <div className='flex gap-1'>
            <input type="checkbox"
              id="numberCheckbox"
              checked={noAllowed}
              onChange={() => setNoAllowed(prev => !prev)}
            />
            <label className='select-none' htmlFor="numberCheckbox">Number</label>

          </div>
          <div className='flex gap-1'>
            <input type="checkbox"
              id="textCheckbox"
              checked={symbolsAllowed}
              onChange={() => { setSymbolsAllowed(prev => !prev)}}
            />
            <label className='select-none' htmlFor="textCheckbox">Symbols</label>

          </div>
        </div>
      </div>
    </>
  )

}

export default Aap;