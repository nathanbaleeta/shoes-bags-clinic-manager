import React from "react";
import Chart from "react-google-charts";

const options = {
  width: 220,
  height: 320,
  redFrom: 90,
  redTo: 100,
  yellowFrom: 75,
  yellowTo: 90,
  minorTicks: 5
};

const getRandomNumber = () => {
  return Math.random() * 100;
};

export default class Gauge extends React.Component {
  state = {
    networkSpeed: 1,
    memory: 80
  };
  intervalID = null;
  getData = () => {
    return [
      ["Label", "Value"],
      ["Customers", this.state.memory],
      ["Sales", this.state.networkSpeed]
    ];
  };
  componentWillUnmount() {
    if (this.intervalID === null) return;
    clearInterval(this.intervalID);
  }
  componentDidMount() {
    this.intervalID = setInterval(() => {
      this.setState(state => {
        return {
          ...state,
          networkSpeed: getRandomNumber(),
          memory: getRandomNumber()
        };
      });
    }, 3000);
  }
  render() {
    return (
      <div className="App">
        <Chart
          chartType="Gauge"
          width="100%"
          height="400px"
          data={this.getData()}
          options={options}
        />
      </div>
    );
  }
}
