import React from "react";
import ChartBar from "./ChartBar.js";
import "./Chart.css";

const Chart = (props) => {

  const dataPointValues = props.data.map(i => i.value);
  const totalMaximum = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.data.map((i) => (
        <ChartBar key={i.label} value={i.value} maxValue={totalMaximum} label={i.label} />
      ))}
    </div>
  );
};

export default Chart;
