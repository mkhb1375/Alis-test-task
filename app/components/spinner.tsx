import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

class Spinner extends Component {
  render() {
    return (
      <div>
        <FontAwesomeIcon icon={faSpinner} spin size="2x" />
      </div>
    );
  }
}

export default Spinner;
