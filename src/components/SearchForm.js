import React from "react";

function SearchForm(props) {
  return (
      <div>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search for an employee"
          id="search"
        />
        <br />
      </div>

  );
}

export default SearchForm;
