import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as Actions from "../actions";
import DataVisualization from "../components/DataVisualization.jsx";

class DataVisualizationContainer extends Component {
  render() {
    return <DataVisualization pareto={this.props.pareto} />;
  }
}

const mapStateToProps = state => ({
  pareto: state.pareto.pareto
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DataVisualizationContainer);
