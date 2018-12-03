import React, { Component } from "react";
import { BarChart, Bar, XAxis, YAxis } from "recharts";

export default class DataVisualization extends Component {
  render() {
    const data = [
      { name: "0", uv: 30 },
      { name: "1", uv: 86 },
      { name: 2, uv: 168 },
      { name: 3, uv: 281 },
      { name: 4, uv: 303 },
      { name: 5, uv: 365 }
    ];
    return (
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey={"name"} />
        <YAxis />
        <Bar type={"monotone"} barSize={30} fill={"#fe7f53"} dataKey={"uv"} />
      </BarChart>
    );
  }
}
