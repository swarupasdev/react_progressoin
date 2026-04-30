import { useState } from "react"

function CreateCampaign() {
  const [title, setTitle] = useState("")
  const [budget, setBudget] = useState("")

  function handleSubmit(e) {
    e.preventDefault()

    const campaign = {
      title,
      budget,
    }

    console.log("Campaign Created:", campaign)

    setTitle("")
    setBudget("")
  }

  return (
    <>
      <h1>Create Campaign</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Campaign Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <button type="submit">Create</button>
      </form>
    </>
  )
}

export default CreateCampaign