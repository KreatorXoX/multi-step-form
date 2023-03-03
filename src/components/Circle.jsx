import React from "react";

const Circle = ({ classes, title }) => {
  return (
    <>
      <div className={classes} data-title={title}></div>
    </>
  );
};

export default Circle;
