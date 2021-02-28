import React, { useState } from "react";
import { PeopleRow } from "./PeopleRow";

//we expect props to contain the people property
export function PeopleTable(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  // const peopleArray = [<tr><td>first</td><td>last</td><td>username</td></tr>, <td>first2</td><td>last2</td><td>username2</td>];
  const rows = [];
  console.log(props);
  if (!props.people) {
    return null;
  }
  for (let i = 0; i < props.people.length; i++) {
    //loop through the responses and add them into an array with just the values I want
    //rows is an array of people object
    const person = props.people[i];
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
      <table class="table">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}
