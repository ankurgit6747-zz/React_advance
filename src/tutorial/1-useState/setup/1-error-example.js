import React from "react";

const ErrorExample = () => {
  let title = "Random Title";
  const handleClick = () => {
    console.log(title);
    // we are getting the value in console but not in the title
  };
  return (
    <>
      <h1>{title}</h1>
      <button type="button" className="btn" onClick={handleClick}>
        change title
      </button>
    </>
  );
};

export default ErrorExample;
