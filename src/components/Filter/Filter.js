import React from "react";
import "./Filter.css";
import PropTypes from "prop-types";

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

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
