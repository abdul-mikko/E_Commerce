import React from "react";
import "./custom-button.styles.scss";
const CustomButton = ({
  children,
  inverted,
  isGoogleSignIn,
  ...buttonprops
}) => {
  return (
    <button
      type="button"
      className={` ${isGoogleSignIn ? `google-sign-in` : ""}
      ${inverted ? `inverted` : ""}
      custom-button `}
      {...buttonprops}
    >
      {children.toUpperCase()}
    </button>
  );
};

export default CustomButton;
