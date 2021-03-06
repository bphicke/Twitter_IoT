import React, { Component } from "react";
import Header from "./Header.jsx";
import DataVisualizationContainer from "../containers/DataVisualizationContainer.jsx";
import TweetsContainer from "../containers/TweetsContainer.jsx";

export default class Background extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <Header />
        <div style={aligner}>
          <DataVisualizationContainer />
        </div>
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

const aligner = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
};
