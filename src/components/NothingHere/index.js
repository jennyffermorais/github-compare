import React from "react";
import ClayEmptyState from "@clayui/empty-state";
import dataset from "../../images/Dataset.svg";

import "./styles.css";
import "../../styles/global.css";

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
  );
}
