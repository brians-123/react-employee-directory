import React, { useState } from "react";
import { Get } from "react-axios";

export function PeopleTable() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  const peopleArray = [<div>Hello</div>, <div>World</div>];
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      {peopleArray}
      <Get url="https://randomuser.me/api/?results=2">
        {(error, response, isLoading, makeRequest, axios) => {
          if (error) {
            return (
              <div>
                Something bad happened: {error.message}{" "}
                <button
                  onClick={() => makeRequest({ params: { reload: true } })}
                >
                  Retry
                </button>
              </div>
            );
          } else if (isLoading) {
            return <div>Loading...</div>;
          } else if (response !== null) {
            return (
              <div>
                {/* this prints out the response, will make a table with relevant data */}
                {JSON.stringify(response.data)}
              </div>
            );
          }
          return <div>Default message before request is made.</div>;
        }}
      </Get>
    </div>
  );
}
