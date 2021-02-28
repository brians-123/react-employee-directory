import React, { useState } from "react";
import { PeopleRow } from "./PeopleRow";

//we expect props to contain the people property
export function PeopleTable(props) {
  const [sortedField, setSortedField] = React.useState(`["email"]`);

  console.log(sortedField);
  console.log(props.people[0]["name"]["first"]);

  console.log(`${sortedField}`);

  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const rows = [];
  console.log(props);
  if (!props.people) {
    return null;
  }

  //Before returning, if filtering, use the filtered results
  const filter = "a";
  const filteredPeople = props.people.filter(person => {
    return person.name.first.includes(filter);
  });
  //sort the filtered list by first name ascending
  const sortedFilteredPeople = filteredPeople.sort((a, b) => {
    var stringifiedA = JSON.stringify(a);
    console.log(`${a}`);
    var nameA = a[sortedField].toUpperCase(); // ignore upper and lowercase
    var nameB = b[sortedField].toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    // names must be equal
    return 0;
  });

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

  return (
    <div>
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
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>
              {/* sort ascending or descending by first name*/}
              <button onClick={() => setSortedField(`["name"]["first"]`)}>
                First Name
              </button>
            </th>
            <th>
              {/* sort ascending or descending by first name*/}
              <button onClick={() => setSortedField(`["name"]["last"]`)}>
                Last Name{" "}
              </button>
            </th>
            <th>
              <button onClick={() => setSortedField(`["email"]`)}>
                Username{" "}
              </button>
            </th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
