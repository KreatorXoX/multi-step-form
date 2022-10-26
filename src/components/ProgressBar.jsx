import React from "react";

const ProgressBar = ({ pageNumber }) => {
  return (
    <div style={{ textAlign: "center", marginBottom: "2em" }}>
      <h2 style={{ textTransform: "uppercase" }}>this is page {pageNumber}</h2>
    </div>
  );
};

export default ProgressBar;
