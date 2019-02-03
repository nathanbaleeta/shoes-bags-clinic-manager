import React from "react";
import Chart from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2008", 1030, 540],
  ["2009", 1000, 400],
  ["2010", 1170, 460],
  ["2011", 660, 1120],
  ["2012", 1030, 540]
];
const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" }
};

export default class BarChart extends React.Component {
  render() {
    return (
      <div className="App">
        <Chart
          chartType="ScatterChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
          legendToggle
        />
      </div>
    );
  }
}
