import React from "react";
const Select = (props) => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>{props.label}</label>
      <select
        onChange={props.onChange}
        id={props.name}
        name={props.name}
        className="form-control"
      >
        <option key={0} value=""></option>
        {props.options.map((element) => {
          return (
            <option key={element._id} value={element._id}>
              {element.name}
            </option>
          );
        })}
      </select>
      {props.error && <div className="alert alert-danger">{props.error}</div>}
    </div>
  );
};

export default Select;
