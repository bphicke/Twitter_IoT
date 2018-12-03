import React, { Component } from "react";
import axios from "axios";
import Background from "../components/Background.jsx";
export default class Home extends Component {
  componentDidMount() {
    console.log(process.env);
    axios
      .get("http://localhost:4000/tweets")
      .then(data => {
        console.log(data);
      })
      .catch(error => console.log("error", error));
  }

  render() {
    return <Background />;
  }
}
