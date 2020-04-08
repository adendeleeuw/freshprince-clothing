import React, { Component } from "react";
import Directory from "../../components/directory/directory.component.jsx";

import "./homepage.styles.scss";
import { queryByTestId } from "@testing-library/dom";

class HomePage extends Component {
  state = {};

  render() {
    return (
      <div className="homepage">
        <Directory />
      </div>
    );
  }
}

export default HomePage;
