import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import axios from "axios";
import Background from "../components/Background.jsx";
class Home extends Component {
  componentDidMount() {
    const badWords = {
      a: true,
      of: true,
      are: true,
      The: true,
      can: true,
      at: true,
      For: true,
      from: true,
      that: true,
      I: true
    };
    axios
      .get("http://localhost:4000/tweets")
      .then(data => {
        this.props.actions.getTweetsAction(data.data.statuses);
        return data;
      })
      .then(tweets => {
        let wordCount = {};
        let words;
        tweets.data.statuses.forEach(tweet => {
          words = tweet.text.split(" ");
          words.forEach(word => {
            wordCount[word] = wordCount[word] + 1 || 1;
          });
        });
        for (let key in wordCount) {
          if (wordCount[key] < 4) {
            delete wordCount[key];
          } else if (badWords[key]) {
            delete wordCount[key];
          }
        }
        let sortedWords = Object.keys(wordCount);
        sortedWords.sort((a, b) => {
          return wordCount[a] - wordCount[b] ? -1 : 1;
        });
        let sortedWordObjects = [];
        let count = 0;
        while (count < 20 && count < sortedWords.length) {
          sortedWordObjects.push({
            name: sortedWords[count],
            uv: wordCount[sortedWords[count]]
          });
          count++;
        }
        this.props.actions.setPareto(sortedWordObjects);
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
