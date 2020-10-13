import React from "react";

const AbsoluteWrapeer = ({ children }) => {
  return <div style={{ position: "absolute", width: "100%" }}>{children}</div>;
};
export default AbsoluteWrapeer;
