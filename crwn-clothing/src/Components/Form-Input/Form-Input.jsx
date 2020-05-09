import React from "react";
import "./form-input.styles.scss";

const FormInput = ({ handleChanges, label, ...otherinputs }) => {
  return (
    <div className="group">
      <input className="form-input" onChange={handleChanges} {...otherinputs} />
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
