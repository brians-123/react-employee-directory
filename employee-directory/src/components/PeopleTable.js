import React, { useState } from "react";
import { PeopleRow } from "./PeopleRow";

//we expect props to contain the people property
export function PeopleTable(props) {
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

  for (let i = 0; i < filteredPeople.length; i++) {
    //loop through the responses and add them into an array with just the values I want
    //rows is an array of people object
    const person = filteredPeople[i];
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
