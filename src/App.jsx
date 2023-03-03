import React, { useState } from "react";
import ProgressBar from "./components/ProgressBar";

import UserRegisterForm from "./components/UserRegisterForm";

function App() {
  const [title, setTitle] = useState({});
  const [pageNum, setPageNum] = useState();

  const getInfos = (title, pageNum) => {
    setTitle(title);
    setPageNum(pageNum);
  };
  return (
    <>
      <ProgressBar title={title} pageNum={pageNum} />
      <UserRegisterForm getInfos={getInfos} />
    </>
  );
}

export default App;
