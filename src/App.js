import React, { useState } from "react";

import Title from "./components/title/Title";
import Input from "./components/input/Input";
import Chart from "./components/chart/Chart";

import "./app.css";

function App() {
  const [weightRecords, setWeightRecords] = useState([]);

  const addNewRecord = (weight) => {
    let index = weightRecords.length + 1;
    let newRecord = {
      index,
      weight,
    };
    setWeightRecords([...weightRecords, newRecord]);
  };

  return (
    <div className="app">
      <Title />
      <Input addNewRecord={addNewRecord} />
      <Chart data={weightRecords} />
    </div>
  );
}

export default App;
