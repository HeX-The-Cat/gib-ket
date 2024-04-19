import { useState } from "react"
import Picture from "./Picture"

const App = () => {
  const [text, setText] = useState("")

  const handleTextChange = (event) => {
    setText(event.target.value)
  }

  return (
    <>
      <div className=" w-screen h-screen bg-gradient-to-r from-slate-950 to-cyan-500">
        <div className=" flex flex-col text-center">
          <Picture text={text} />

          <br/>

          <label className="">
            <input placeholder="Ket wants to say something!" className=" text-center border-solid border-2 border-black rounded-lg w-96" type="text" value={text} onChange={handleTextChange} />
          </label>
        </div>
      </div>
    </>
  )
}

export default App