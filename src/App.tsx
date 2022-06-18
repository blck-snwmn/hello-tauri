import { useState } from 'react'
import logo from './logo.svg'
import { invoke } from '@tauri-apps/api'


function App() {
  const [name, setName] = useState("")
  const [invokeValue, setInvokeValue] = useState("")
  return (
    <div>
      <p>Hello Tauri</p>
      <p>
        <input onChange={(e) => { setName(e.target.value) }} />
        <button type="button" onClick={() => {
          invoke('greet', { name: name })
            // `invoke` returns a Promise
            .then((response) => {
              console.log(response)
              if (typeof response == "string") {
                setInvokeValue(response);
              }
            })
        }}>
          invoke
        </button>
      </p>
      <div>invoke value:</div>
      <div>{invokeValue}</div>
    </div>
  )
}

export default App
