import React from "react";

function Wrapper(props) {
  console.log("children", props.children);
  return (
    <div
      style={{
        backgroundColor: "#f4f4f4",
        maxWidth: "1200px",
        height: "90vh",
        margin: "5rem auto",
        padding: "3rem 0rem",
      }}
    >
      {props.children}
    </div>
  );
}

export default Wrapper;