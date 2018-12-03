import React, { Component } from "react";

export default class TweetBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={tweetHeaderStyle}>sample text body</div>
      </React.Fragment>
    );
  }
}

const tweetHeaderStyle = {
  flex: "4 400px",
  marginLeft: "5px",
  marginTop: "5px"
};

const imageStyle = {
  flex: "1 50px",
  margin: "5px"
};

const screenName = {
  color: "#a5a5a5",
  fontSize: "small"
};
