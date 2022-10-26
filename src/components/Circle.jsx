import React from "react";

const Circle = ({ classes, title }) => {
  return (
    <>
      <div className={classes}>
        <div className="circleLabel">{title}</div>
      </div>
    </>
  );
};

export default Circle;
