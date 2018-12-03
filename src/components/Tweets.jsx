import React, { Component } from "react";
import Tweet from "./Tweet.jsx";

export default class Tweets extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.tweets.map(tweet => {
          return <Tweet key={tweet.id} tweet={tweet} />;
        })}
      </React.Fragment>
    );
  }
}
