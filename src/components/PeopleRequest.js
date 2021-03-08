import React from "react";
import { Get } from "react-axios";
import { PeopleTable } from "./PeopleTable";

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
          return <PeopleTable people={response.data.results} />;
        }
        return <div>Default message before request is made.</div>;
      }}
    </Get>
  );
}
