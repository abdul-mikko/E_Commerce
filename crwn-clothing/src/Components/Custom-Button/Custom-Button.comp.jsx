import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({ children, isGoogleSignIn, ...buttonprops }) => {
  return (
    <button
      className={` ${isGoogleSignIn ? `google-sign-in` : ""} custom-button `}
      {...buttonprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
