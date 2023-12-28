import { useState, useEffect } from "react";

export default function App() {
  const games = ["cricket", "basketball", "football"];
  const days = ["weekday", "weekend"];
  const [selectedGame, setSelectedGame] = useState("");
  const [selectedDay, setSelectedDay] = useState("");
  return (
    <div className="App">
      <h3>select game</h3>
      {games.map((game, index) => (
        <>
          <input
            type="radio"
            name="games"
            value={game}
            onChange={(e) => setSelectedGame(e.target.value)}
          />
          <label>{game}</label>
        </>
      ))}
      <h3>select day</h3>
      {days.map((day) => (
        <>
          <input
            type="radio"
            name="days"
            value={day}
            onChange={(e) => setSelectedDay(e.target.value)}
          />
          <label>{day}</label>
        </>
      ))}
      <h5>
        I will play {selectedGame} on {selectedDay}
      </h5>
    </div>
  );
}
