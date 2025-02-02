import React from "react";
import { LineWave } from "react-loader-spinner";

const Animation = () => {
  return (
    <LineWave
      visible={true}
      height="120"
      width="120"
      color="#4fa94d"
      ariaLabel="line-wave-loading"
      wrapperStyle={{}}
      wrapperClass=""
      firstLineColor=""
      middleLineColor=""
      lastLineColor=""
    />
  );
};

export default Animation;
