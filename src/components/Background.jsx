import React, { Component } from "react";
import Header from "./Header.jsx";
import Tweet from "./Tweet";

export default class Background extends Component {
  render() {
    return (
      <div style={backgroundStyle}>
        <Header />
        <div style={flexContainer}>
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
          <Tweet />
        </div>
      </div>
    );
  }
}

const backgroundStyle = {
  width: "auto",
  height: "900px",
  backgroundColor: "#ededed"
};
const flexContainer = {
  display: "flex",
  flexWrap: "wrap"
};
