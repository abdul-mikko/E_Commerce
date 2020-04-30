import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherinputs }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChange} {...otherinputs} />
      {label ? (
        <label
          className={`${
            otherinputs.value.length ? `shrink` : ""
          } form-input-label `}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};
export default FormInput;
