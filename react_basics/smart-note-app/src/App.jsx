import { useState, useEffect, useRef, useCallback } from "react"

function App() {
  const [notes, setNotes] = useState([])
  const [input, setInput] = useState("")

  //  useRef = access DOM directly
  const inputRef = useRef(null)

  //  useEffect = run on mount (load notes)
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("notes"))
    if (saved) setNotes(saved)

    // auto focus input
    inputRef.current.focus()
  }, [])

  // 🔹 useEffect = run when notes change
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes))
  }, [notes])

  // 🔹 useCallback → prevent function recreation
  const addNote = useCallback(() => {
    if (!input.trim()) return

    setNotes(prev => [...prev, input])
    setInput("")
    inputRef.current.focus()
  }, [input])

  const deleteNote = useCallback((index) => {
    setNotes(prev => prev.filter((_, i) => i !== index))
  }, [])

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-2xl mb-4">Smart Notes</h1>

      <div className="flex gap-2">
        <input
          ref={inputRef}   // 🔹 useRef here
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-2 rounded text-amber w-full"
          placeholder="Write note..."
        />
        <button
          onClick={addNote}
          className="bg-blue-500 px-4 rounded"
        >
          Add
        </button>
      </div>

      <div className="mt-4 space-y-2">
        {notes.map((note, index) => (
          <div
            key={index}
            className="flex justify-between bg-gray-800 p-2 rounded"
          >
            <span>{note}</span>
            <button
              onClick={() => deleteNote(index)}
              className="text-red-400"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App