import React from "react";

//first, last, username
export function PeopleRow(props) {
  //Declare a new state variable, which we'll call "rows"
  //needs parameters aka props
  return (
    <tr>
      <th scope="row">{props.rowNumber}</th>
      <td>{props.first}</td>
      <td>{props.last}</td>
      <td>{props.email}</td>
    </tr>
  );
}
