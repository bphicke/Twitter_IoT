import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import axios from "axios";
import Background from "../components/Background.jsx";
class Home extends Component {
  componentDidMount() {
    // console.log(this.props.tweets);
    // console.log(this.props.actions);
    //getTweetsAction
    axios
      .get("http://localhost:4000/tweets")
      .then(data => {
        this.props.actions.getTweetsAction(data.data.statuses);
      })
      .then(() => {
        console.log(this.props.tweets);
        //delete this promise link
      })
      .catch(error => console.log("error", error));
  }

  render() {
    return <Background />;
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
)(Home);
