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
                <div className="form-group row">
                  {/* <label for="example-text-input" class="col-2 col-form-label">
                    Text
                  </label> */}
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
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            );
          }
          return <div>Default message before request is made.</div>;
        }}
      </Get>
    </div>
  );
}
