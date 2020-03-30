import React, { Component } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { selectCity } from "../actions";

class City extends Component {
  handleClick = () => {
    this.props.selectCity(this.props.city);
  };

  render() {
    // const props = this.props;

    let containerClasses = "list-group-item";
    if (this.props.city === this.props.selectedCity) {
      containerClasses += " active-city";
    }
    return (
      <li className={containerClasses} onClick={this.handleClick} role="link" tabIndex={this.props.tabIndex + 1}>
        <h3>{this.props.city.name}</h3>
      </li>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
