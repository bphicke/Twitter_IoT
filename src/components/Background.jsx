import React, { Component } from "react";
import Header from "./Header.jsx";
import DataVisualization from "./DataVisualization.jsx";
import TweetsContainer from "../containers/TweetsContainer.jsx";

export default class Background extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <Header />
        <DataVisualization className={"chart"} />
        <div style={flexContainer}>
          <TweetsContainer />
        </div>
      </div>
    );
  }
}

const backgroundStyle = {
  width: "auto",
  height: "auto",
  backgroundColor: "#ededed"
};
const flexContainer = {
  display: "flex",
  flexWrap: "wrap"
};
