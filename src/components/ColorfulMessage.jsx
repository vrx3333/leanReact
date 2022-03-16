import React from "react";

export const ColorfulMessage = (props) => {
  // console.log(props);
  const { color, children } = props;
  const contentStyle = {
    // color: "blue",
    // fontSize: "18px"
    // color: color,
    color,
    fontSize: "18px"
  };
  return (
    <p style={contentStyle}>
      {props.message}
      {children}
    </p>
  );
};

// export default colorfulMessage;
