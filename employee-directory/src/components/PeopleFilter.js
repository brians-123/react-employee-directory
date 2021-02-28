import React, { useState } from "react";

//when this is changed, let the parent component know

export function PeopleFilter(props) {
  return (
    <div className="form-group row">
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          value="Enter your filter"
          id="example-text-input"
        />
      </div>
    </div>
  );
}
