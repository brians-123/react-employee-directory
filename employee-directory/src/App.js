import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom";
import { PeopleTable } from "./components/PeopleTable";
import { PeopleRequest } from "./components/PeopleRequest";

function App() {
  return <PeopleRequest />;
}

export default App;
