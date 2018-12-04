import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

export default class DataVisualization extends Component {
  render() {
    console.log(this.props.pareto);
    return (
      <React.Fragment>
        <div style={alignTop} />
        <div style={barChartStyle}>
          <BarChart
            layout={"vertical"}
            width={600}
            height={600}
            data={this.props.pareto}
          >
            <XAxis type={"number"} />
            <YAxis dataKey={"name"} type={"category"} />
            <Bar barSize={15} fill={"#fe7f53"} dataKey={"uv"} />
          </BarChart>
        </div>
        <div style={alignBottom} />
      </React.Fragment>
    );
  }
}

const barChartStyle = {
  maxWidth: "50%"
};

const alignTop = {
  alignSelf: "flex-start"
};

const alignBottom = {
  alignSelf: "flex-end"
};
