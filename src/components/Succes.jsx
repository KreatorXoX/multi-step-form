import React from "react";

const Succes = ({ values }) => {
  let printable = [];
  for (const key of Object.keys(values)) {
    printable.push(
      <p>
        {key} - {values[key].value}
      </p>
    );
  }
  return (
    <div>
      <h2 style={{ textAlign: "center", gridArea: "form" }}>
        Confirmation Successful
      </h2>
      <div>{printable}</div>
    </div>
  );
};

export default Succes;
