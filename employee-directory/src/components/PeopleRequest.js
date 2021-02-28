import React, { useState } from "react";
import { Get } from "react-axios";
import { PeopleTable } from "./PeopleTable";

//add component for filter

//start at the highest (biggest) level, then work down to smallest in react
// Index-> then use App.js->PeopleRequest.js->PeopleFilter->PeopleTable->PeopleRow

export function PeopleRequest() {
  return (
    <Get url="https://randomuser.me/api/?results=50">
      {(error, response, isLoading, makeRequest, axios) => {
        if (error) {
          return (
            <div>
              Something bad happened: {error.message}{" "}
              <button onClick={() => makeRequest({ params: { reload: true } })}>
                Retry
              </button>
            </div>
          );
        } else if (isLoading) {
          return <div>Loading...</div>;
        } else if (response !== null) {
          console.log(response.data);
          return <PeopleTable people={response.data.results} />;
        }
        return <div>Default message before request is made.</div>;
      }}
    </Get>
  );
}
