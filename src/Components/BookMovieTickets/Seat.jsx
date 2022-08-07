import React, { Component } from "react";
import { connect } from "react-redux";
import style from "./Home.module.css";

export class Seat extends Component {
  render() {
    const { seat } = this.props;

    return <div></div>;
  }
}

export default connect()(Seat);
