import React, { useState } from "react";

//when this is changed, let the parent component know

export function PeopleFilter(props) {
  return (
    <div className="form-group row">
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          onChange={props.onChange}
          value={props.filterText}
          placeholder="Filter by first name"
          id="filter-by"
        />
      </div>
    </div>
  );
}
