import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black')


  // building a color changer on the screen.
  // --we need ui
  // --need a state to update ui through onClick()

  return (
    <>
      <div className='w-full h-screen bg-purple-300  text-red-50 ' style={{ backgroundColor: color }}>
        <div className='flex flex-wrap justify-center ' >
          <button className=' bg-red-600 rounded-full px-4 '
            onClick={() => setColor('red')}
          >red</button>
          <button className='bg-green-500 rounded-full px-4  '
            onClick={() => setColor('green')}
          >green</button>
          <button className='bg-yellow-500 rounded-full px-4  '
            onClick={() => setColor('yellow')}
          >yellow</button>
          <button className='bg-amber-800 rounded-full px-4  '
            onClick={() => setColor('brown')}
          >brown</button>
        </div>

      </div>
    </>
  )
}

export default App;