import React from "react";
import { useSelector } from "react-redux";

const NotFound = () => {
  const theme = useSelector(state => state.theme.value);
  return (
    <div className={theme ? "not-found-main" : "not-found-main-dark"}>
      <h1>404</h1>
      <div>Page NotFound</div>
    </div>
  );
};

export default NotFound;
