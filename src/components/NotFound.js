import React from "react";
import { useHistory } from "react-router";

const NotFound = () => {
  const history = useHistory();
  const goBack = () => {
    history.push("/");
  };
  return (
    <div className="container">
      <div className="not-found">
        <h1>Not Found</h1>
        <button onClick={goBack}>Go BacK To HOME</button>
      </div>
    </div>
  );
};

export default NotFound;
