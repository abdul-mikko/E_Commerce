import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({ children, inverted ,isGoogleSignIn, ...buttonprops }) => {
  return (
    <button
      className={` ${isGoogleSignIn ? `google-sign-in` : ""}
      ${inverted? `inverted` : ""}
      custom-button `}
      {...buttonprops}
    >
      {children}
    </button>
  );
};

export default CustomButton;
