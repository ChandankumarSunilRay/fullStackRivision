import { useState, useCallback, useEffect, useRef } from "react";

function Aap() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const [charAllowed, setCharAllowed] = useState(false)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
      setPassword(pass)

    }

  }, [setPassword, length, numberAllowed, charAllowed,])

  // useEffect
  useEffect(() => {
    passwordGenerator()

  }, [length, numberAllowed, charAllowed])

  // useRef
  const passwordRef = useRef(null)

  const copyPasswordToClipboard = useCallback(() => {
    window.navigator.clipboard.writeText(password)

  }, [password])

  return (
    <>
      <div className="w-full max-w-md-auto shadow-md rounded-lg my-8 text-shadow-blue-600 bg-green-700 ">
        <div className="flex shadow rounded-lg overflow-hidden mb-4   ">
          <input type="text"
            value={password}
            className="outline-none w-full py-1 px-3 "
            placeholder="password"
            readOnly
            ref={passwordRef}

          />
          <button
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
            onClick={copyPasswordToClipboard}

          >copy</button>
        </div>


      </div>
      <div className="flex text-sm gap-x-2 ">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={17}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value)
            }}

          />
          <label>Length: {length}</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}

          />
          <label htmlFor="numberInput">Numbers</label>

        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}

          />
          <label htmlFor="characterInput">Characters</label>

        </div>
      </div>
    </>
  )
}

export default Aap