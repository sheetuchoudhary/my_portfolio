import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <button onClick={this.props.onClick} style={{ padding: "8px 16px", fontSize: "16px" ,color:"royalblue"}}>
        {this.props.text}Refresh
      </button>
    );
  }
}
