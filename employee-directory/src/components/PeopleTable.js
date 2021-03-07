import React, { useState } from "react";
import { PeopleFilter } from "./PeopleFilter";
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

  const rows = [];
  if (!props.people) {
    return null;
  }

  //Before returning, if filtering, use the filtered results
  const filteredPeople = props.people.filter(person => {
    return person.name.first.toUpperCase().includes(filterText.toUpperCase());
  });

  let sortedFilteredPeople;
  //sort the filtered list by first name ascending
  if (!sortColumn) {
    sortedFilteredPeople = filteredPeople;
  } else {
    sortedFilteredPeople = filteredPeople.sort((a, b) => {
      //allow sortDirection state to flip the direction of sort function
      let nameA = sortColumn.getValue(a).toUpperCase(); // ignore upper and lowercase
      let nameB = sortColumn.getValue(b).toUpperCase(); // ignore upper and lowercase
      //flip the direction
      if (sortDirection === "descending") {
        nameB = sortColumn.getValue(a).toUpperCase(); // ignore upper and lowercase
        nameA = sortColumn.getValue(b).toUpperCase(); // ignore upper and lowercase
      }
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
      <th className="text-left px-0">
        <button
          className="btn btn-link text-white"
          onClick={() => {
            setSortColumn(columnArray[i]);
            //initally, sort by a-z, then z-a if it has been sorted
            //3 states. start as unsorted, then ascending, then descending
            //handle switching sort columns. If the prior target != current target
            if (sortDirection === "ascending") {
              setSortDirection("descending");
            } else {
              setSortDirection("ascending");
            }
          }}
        >
          {columnArray[i].displayName}
        </button>
      </th>
    );
  }

  return (
    <div>
      <PeopleFilter value={filterText} onChange={onChange} />
      <table className="table table-striped">
        <thead>
          <tr className="bg-secondary">
            <th>#</th>
            {headers}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
