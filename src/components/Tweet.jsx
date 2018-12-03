import React, { Component } from "react";

export default class Tweet extends Component {
  render() {
    return <div style={tweetCardStyle}>Tweet</div>;
  }
}

const tweetCardStyle = {
  flex: "400px",
  backgroundColor: "#ffefe9",
  margin: "15px",
  border: "1px solid #a5a5a5",
  borderRadius: "4px"
};
