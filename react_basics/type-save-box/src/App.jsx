import { useState, useEffect, useRef, useCallback } from "react"

function App() {
  //state
  const [text, setText] = useState("")
  const [savedText, setSavedText] = useState("")

  //useRef -> for DOM access
  const inputRef = useRef(null)

  //useEffect (1) -> run once (on mount)
  useEffect(() => {
    const stored = localStorage.getItem("myText")
    if (stored) setSavedText(stored)
      
    //focus input when page loads
    inputRef.current.focus()
  }, [])

  //useEffect (2) -> run when savedText changes
  useEffect(() => {
    if (savedText) {
      localStorage.setItem("myText", savedText)
    }
  }, [savedText])

  //useCallback -> stable function
  const handleSave = useCallback(() => {
    setSavedText(text)
    setText("")
    inputRef.current.focus()
  }, [text])

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
      
      <h1 className="text-xl mb-4">Simple React Hooks Demo</h1>

      <div className="flex gap-2">
        <input
          ref={inputRef} // 🔹 useRef here
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="p-2 rounded text-amber"
          placeholder="Type something..."
        />

        <button
          onClick={handleSave} // 🔹 useCallback here
          className="bg-blue-500 px-4 rounded"
        >
          Save
        </button>
      </div>

      <div className="mt-6">
        <p className="text-gray-400">Saved Value:</p>
        <h2 className="text-lg">{savedText}</h2>
      </div>

    </div>
  )
}
// function App(){
//   return <h1 bg-black  > Santiswarup</h1>
// }
export default App