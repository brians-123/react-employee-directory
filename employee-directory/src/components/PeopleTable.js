import React, { useState } from "react";
import { PeopleRow } from "./PeopleRow";

const firstNameColumn = {
  displayName: "First Name",
  getValue: person => {
    return person.name.first;
  }
};

const lastNameColumn = {
  displayName: "Last Name",
  getValue: person => {
    return person.name.last;
  }
};

const emailColumn = {
  displayName: "Email",
  getValue: person => {
    return person.email;
  }
};

const columnArray = [firstNameColumn, lastNameColumn, emailColumn];

//we expect props to contain the people property
export function PeopleTable(props) {
  const [sortColumn, setSortColumn] = React.useState(null);
  //will use the state here and change it on each button click to sort ascending or desc
  const [sortDirection, setSortDirection] = React.useState(null);

  //setting up filtering in this component prior to moving it down to PeopleFilter
  const [filterText, setFilterText] = useState("");

  const onChange = evt => {
    setFilterText(evt.target.value);
  };

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  //set the filter text when the value changes
  const handleInputChange = evt => {
    // alert(`submitting ${filterText}`);
  };

  const rows = [];
  console.log(props);
  if (!props.people) {
    return null;
  }

  //Before returning, if filtering, use the filtered results
  const filter = "a";
  const filteredPeople = props.people.filter(person => {
    return person.name.first.includes(filterText);
  });

  let sortedFilteredPeople;
  //sort the filtered list by first name ascending
  if (!sortColumn) {
    sortedFilteredPeople = filteredPeople;
  } else {
    sortedFilteredPeople = filteredPeople.sort((a, b) => {
      var nameA = sortColumn.getValue(a).toUpperCase(); // ignore upper and lowercase
      var nameB = sortColumn.getValue(b).toUpperCase(); // ignore upper and lowercase

      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });
  }

  for (let i = 0; i < sortedFilteredPeople.length; i++) {
    //loop through the responses and add them into an array with just the values I want
    //rows is an array of people object
    const person = sortedFilteredPeople[i];

    //need to create a row for this person
    rows.push(
      <PeopleRow
        rowNumber={i + 1}
        first={person.name.first}
        last={person.name.last}
        email={person.email}
      />
    );
  }
  const headers = [];
  for (let i = 0; i < columnArray.length; i++) {
    //loop through the columns and add the column display into the html
    headers.push(
      <th>
        <button onClick={() => setSortColumn(columnArray[i])}>
          {columnArray[i].displayName}
        </button>
      </th>
    );
  }

  return (
    <div>
      <div className="form-group row">
        <div className="col-12">
          <input
            className="form-control"
            type="text"
            defaultValue="Enter your filter"
            value={filterText}
            onChange={onChange}
            id="example-text-input"
          />
        </div>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            {headers}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
