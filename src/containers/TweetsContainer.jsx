import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import Tweets from "../components/Tweets.jsx";
class TweetsContainer extends Component {
  render() {
    return <Tweets tweets={this.props.tweets} />;
  }
}

const mapStateToProps = state => ({
  tweets: state.tweets.tweets
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TweetsContainer);
