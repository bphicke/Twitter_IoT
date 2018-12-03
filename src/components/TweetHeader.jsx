import React, { Component } from "react";

export default class TweetHeader extends Component {
  render() {
    return (
      <React.Fragment>
        <img src={this.props.profileImage} alt={""} style={imageStyle} />
        <div style={tweetHeaderStyle}>
          {this.props.name}
          <div style={screenName}>@{this.props.screen_name}</div>
        </div>
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
