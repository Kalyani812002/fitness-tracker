import React, { useState } from "react";

function Tracker() {
  const [steps, setSteps] = useState("");
  const [calories, setCalories] = useState("");
  const [workout, setWorkout] = useState("");
  const [data, setData] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newEntry = {
      steps,
      calories,
      workout,
    };

    setData([...data, newEntry]);

    setSteps("");
    setCalories("");
    setWorkout("");
  };

  return (
    <div>
      <h2>Fitness Tracker</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
        />

        <input
          type="number"
          placeholder="Calories"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
        />

        <input
          type="text"
          placeholder="Workout"
          value={workout}
          onChange={(e) => setWorkout(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      <h3>Daily Records</h3>

      <ul>
        {data.map((item, index) => (
          <li key={index}>
            Steps: {item.steps} | Calories: {item.calories} | Workout: {item.workout}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tracker;