import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

export default class DataVisualization extends Component {
  render() {
    console.log(this.props.pareto);
    return (
      <BarChart
        layout={"vertical"}
        width={600}
        height={600}
        data={this.props.pareto}
        style={{ marginLeft: "120px" }}
      >
        <XAxis type={"number"} />
        <YAxis dataKey={"name"} type={"category"} />
        <Bar barSize={15} fill={"#fe7f53"} dataKey={"uv"} />
      </BarChart>
    );
  }
}
