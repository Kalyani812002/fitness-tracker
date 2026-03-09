import React, { useEffect, useState } from "react";
import StatsChart from "../components/StatsChart";

function Home() {

  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("activities")) || [];
    setActivities(saved);
  }, []);

  // Total Steps Calculate
  const totalSteps = activities.reduce(
    (total, act) => total + Number(act.steps),
    0
  );

  // Calories calculate (simple logic)
  const calories = Math.floor(totalSteps * 0.04);

  return (
    <div>

      <h1>Fitness Dashboard</h1>

      <div style={{display:"flex",gap:"20px"}}>

        <div style={{border:"1px solid gray",padding:"15px"}}>
          <h3>Total Steps</h3>
          <p>{totalSteps}</p>
        </div>

        <div style={{border:"1px solid gray",padding:"15px"}}>
          <h3>Calories Burned</h3>
          <p>{calories}</p>
        </div>

      </div>

      <h2>Weekly Progress</h2>

      <StatsChart />

    </div>
  );
}

export default Home;