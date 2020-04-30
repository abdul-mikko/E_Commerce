import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({ children, ...buttonprops }) => {
  return (
    <button className="custom-button" {...buttonprops}>
      {children}
    </button>
  );
};

export default CustomButton;
