import React, { Component } from "react";

export default class TweetBody extends Component {
  render() {
    return (
      <React.Fragment>
        <div style={tweetBodyStyle}>{this.props.text}</div>
      </React.Fragment>
    );
  }
}

const tweetBodyStyle = {
  flex: "4 400px",
  marginLeft: "15px",
  marginBottom: "15px",
  fontWeight: "200"
};
