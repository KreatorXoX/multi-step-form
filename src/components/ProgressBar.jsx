import React from "react";

// const ProgressBar = ({ title, pageNum }) => {
//   const interval = 100 / Object.keys(title).length;

//   const progress = (pageNum * interval).toFixed(2);

//   const steps = Object.keys(title).map((step, idx) => {
//     return (
//       <div key={idx} className="barmarker">
//         {idx + 1}
//       </div>
//     );
//   });
//   return (
//     <div style={{ textAlign: "center", marginBottom: "2em" }}>
//       <section className="progress-container">
//         <div className="barmarker-container">{steps}</div>
//         <progress className="progress" max="100" value={progress} />
//       </section>
//     </div>
//   );
// };

// export default ProgressBar;

import { useState, useEffect } from "react";
import Circle from "./Circle";
//import "./Progress.css";

const ProgressBar = ({ title, pageNum }) => {
  const circle = Object.keys(title).length;
  const [active, setActive] = useState(pageNum);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress((100 / (circle - 1)) * active);
    setActive(pageNum);
  }, [active, circle, pageNum]);

  const arr = [];
  for (let i = 0; i < circle; i++) {
    arr.push(
      <Circle
        key={i}
        classes={i <= active ? "circle active" : "circle"}
        title={title[i]}
      />
    );
  }

  return (
    <div className="container">
      <div className="content">
        <div className="progressbar">
          <div
            className="showProgress"
            style={{ width: `${progress > 100 ? 100 : progress}%` }}
          ></div>
          {arr}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
