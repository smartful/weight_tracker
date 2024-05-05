import React, { useState } from "react";

import Title from "./components/title/Title";
import Input from "./components/input/Input";
import Chart from "./components/chart/Chart";

import "./app.css";

const App = () => {
  const [weightRecords, setWeightRecords] = useState([]);

  const addNewRecord = (weight) => {
    setWeightRecords([...weightRecords, weight]);
  };

  return (
    <div className="app">
      <Title />
      <Input addNewRecord={addNewRecord} />
      <Chart data={weightRecords} />
    </div>
  );
};

export default App;
