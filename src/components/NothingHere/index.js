import React from "react";
import ClayEmptyState from "@clayui/empty-state";

import "./styles.css";
import "../../styles/global.css";
import dataset from "../../images/Dataset.svg";

export function NothingHere() {
  return (
    <div className="dataset-container">
      <ClayEmptyState
        description="Add some repositories by clicking add new repository"
        imgProps={{
          alt: "There is still nothing here",
          title: "There is still nothing here",
        }}
        imgSrc={dataset}
        title="There is still nothing here"
      />
    </div>
    // <div className="dataset-container">
    //   <img className="dataset" src={dataset} alt="dataset" />

    //   <div className="text-nothing-here">
    //     <strong>There is still nothing here</strong>
    //     <p>Add some repositories by clicking add new repository</p>
    //   </div>
    // </div>
  );
}
