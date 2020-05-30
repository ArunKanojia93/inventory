import React, { useState } from "react";

export const SearchBar = props => {
  const [value = "", setValue] = useState();

  const onInputChange = event => {
    setValue(event.target.value);
  };

  const onInputSubmit = event => {
    event.preventDefault();

    props.onFormSubmit(value);
    setValue("");
  };

  return (
    <div className="search-bar">
      <form onSubmit={onInputSubmit}>
        <div>
          <h1>Start Building Your Inventory</h1>
        </div>
        <input
          className="input"
          value={value}
          onChange={onInputChange}
          placeholder="Search Inventory"
          type="text"
        ></input>
      </form>
    </div>
  );
};
