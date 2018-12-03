import React, { Component } from "react";

export default class Header extends Component {
  render() {
    return (
      <div style={headerStyle}>
        <div style={headerTextStyle}>Meshify #IoT</div>
      </div>
    );
  }
}

const headerStyle = {
  width: "auto",
  height: "50px",
  boxShadow: "0 2px 0 0 #dadada",
  backgroundColor: "#272932",
  display: "flex"
};

const headerTextStyle = {
  marginLeft: "auto",
  marginRight: "auto",
  marginTop: "14px",
  marginBottom: "14px",
  width: "auto",
  height: "22px",
  fontSize: "18px",
  fontWeight: "bold",
  color: "#fe7f53"
};
