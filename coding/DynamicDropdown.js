import { useState } from "react";
const countries = [
  { name: "India", value: "IN", cities: ["Delhi", "Mumbai"] },
  { name: "Pak", value: "PK", cities: ["Lahore", "Karachi"] },
  { name: "Bangladesh", value: "BG", cities: ["Dhaka", "Chittagong"] },
];
export default function App() {
  const [country, setCountry] = useState(0);
  return (
    <div className="App">
      <select
        value={country}
        onChange={(e) => {
          setCountry(e.target.value);
        }}
      >
        {countries.map((item, index) => (
          <option value={index} key={index}>
            {item.name}
          </option>
        ))}
      </select>
      <select>
        {countries[country] &&
          countries[country].cities.map((item, index) => (
            <option key={index}>{item}</option>
          ))}
      </select>
    </div>
  );
}
