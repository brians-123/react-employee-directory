import React, { useState } from "react";

export function PeopleRow() {
  // Declare a new state variable, which we'll call "row"
  const [row, setRow] = useState(0);
  
  // 
  const peopleRows = [<div>Hello</div>, <div>World</div>]