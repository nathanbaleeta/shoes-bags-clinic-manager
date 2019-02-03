import React from "react";
import Chart from "react-google-charts";

const columns = [
  {
    type: "number",
    label: "year"
  },
  {
    label: "AttentionSpan",
    type: "number"
  }
];
const data = [[2015, 5], [2016, 3], [2018, 1]];

export default class AreaChart extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="AreaChart"
          width="100%"
          height="400px"
          legendToggle
          rows={data}
          columns={columns}
        />
      </div>
    );
  }
}
