import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    );
  }
}

export default Loader;
