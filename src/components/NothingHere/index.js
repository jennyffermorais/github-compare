import React from "react";

import "./styles.css";
import "../../styles/global.css";
import dataset from "../../images/Dataset.svg";

export function NothingHere() {
  return (
    <div className="dataset-container">
      <img className="dataset" src={dataset} alt="dataset" />

      <div>
        <strong>There is still nothing here</strong>
        <p>Add some repositories by clicking add new repository</p>
      </div>
    </div>
  );
}
