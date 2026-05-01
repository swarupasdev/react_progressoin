import { useEffect, useState } from "react"

function Dashboard() {
  const [campaigns, setCampaigns] = useState([])

  useEffect(() => {
    const storedCampaigns =
      JSON.parse(localStorage.getItem("campaigns")) || []

    setCampaigns(storedCampaigns)
  }, [])

  return (
    <>
      <h1>Dashboard</h1>

      {campaigns.length === 0 ? (
        <p>No campaigns created yet</p>
      ) : (
        campaigns.map((campaign) => (
          <div key={campaign.id}>
            <h3>{campaign.title}</h3>
            <p>Budget: ₹{campaign.budget}</p>
            <p>Impressions: {campaign.impressions}</p>
            <p>Clicks: {campaign.clicks}</p>
          </div>
        ))
      )}
    </>
  )
}

export default Dashboard