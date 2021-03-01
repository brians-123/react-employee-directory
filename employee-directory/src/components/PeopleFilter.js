import React, { useState } from "react";

//when this is changed, let the parent component know

export function PeopleFilter(props) {
  const [filterText, setFilterText] = useState("");

  const handleInputChange = evt => {
    evt.preventDefault();
    alert(`submitting ${filterText}`);
  };

  return (
    <div className="form-group row">
      <div className="col-12">
        <input
          className="form-control"
          type="text"
          onChange={e => setFilterText(e.target.value)}
          // value={filterText}
          placeholder="Filter by first name"
          id="filter-by"
        />
      </div>
    </div>
  );
}
