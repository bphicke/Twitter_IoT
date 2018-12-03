import React, { Component } from "react";
import TweetHeader from "./TweetHeader.jsx";
import TweetBody from "./TweetBody.jsx";

export default class Tweet extends Component {
  render() {
    console.log(this.props.tweet);
    return (
      <div style={tweetCardStyle}>
        <TweetHeader
          name={this.props.tweet.user.name}
          profileImage={this.props.tweet.user.profile_image_url_https}
          screen_name={this.props.tweet.user.screen_name}
        />
        <hr style={divider} />
        <TweetBody />
      </div>
    );
  }
}

const tweetCardStyle = {
  flex: "400px",
  backgroundColor: "#ffefe9",
  margin: "15px",
  border: "1px solid #a5a5a5",
  borderRadius: "4px",
  display: "flex",
  flexWrap: "wrap"
};

const divider = {
  height: "1px",
  width: "400px",
  borderColor: "a5a5a5",
  borderStyle: "inset"
};
