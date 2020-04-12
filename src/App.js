import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const getDAttribute = (cx, cy, radius, amount) => {
    var d = ` M ${cx + radius} ${cy}`;
    let ang = 0;
    while (ang <= amount) {
      var radians = ang * (Math.PI / 180); // convert degree to radians
      var x = cx + Math.cos(radians) * radius;
      var y = cy + Math.sin(radians) * radius;
      d += ` L ${x} ${y}`;
      ang++;
    }
    return d;
  };

  const dd = (amount) =>
    getDAttribute(
      35,
      35,
      50,
      parseInt(360 / amount) == 360 ? 360 : parseInt(360 / amount) - 10
    );
  const amount = [1, 2, 3, 4, 5, 6, 7, 7, 9, 10];

  const active = 50;
  return (
    <div className="App">
      <svg width="100" height="100">
        {amount.map((item, index) => (
          <path
            d={dd(amount.length)}
            fill="none"
            stroke={index + 1 > 8 ? "#b5b5b5" : "red"}
            strokeWidth={15}
            transform={`rotate(${
              (360 / amount.length) * index + 1 + 270
            } 35 35)`}
          />
        ))}
      </svg>
    </div>
  );
}

export default App;
