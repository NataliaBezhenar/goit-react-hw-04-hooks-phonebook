import React from "react";
import "./Filter.css";

const Filter = ({ value, onChange }) => (
  <label className="Filter__label">
    Find contacts by name:{" "}
    <input
      type="text"
      className="Filter__input"
      value={value}
      onChange={onChange}
    />
  </label>
);
export default Filter;
