import React from "react";
import "./App.css";
import { Form, Name } from "./components/Form";
import { List } from "./components/List";

enum PAGE_STATE { //to avoid "magic strings"
  FORM,
  LIST,
}

export default function App() {
  const [page, setPage] = React.useState(PAGE_STATE.LIST); //current state
  const [names, setNames] = React.useState<Name[]>([]); //array of Name types

  const onStateChange = () => { //change page state, render which component (avoid react routing)
    setPage(page === PAGE_STATE.LIST ? PAGE_STATE.FORM : PAGE_STATE.LIST);
  };

  //handler provided to Form components. Calls with Name type
  const onSubmit = (name: Name) => {
    setNames([...names, name]); //add Name to our state of Name arrays
    console.log('submitted from form', name); //debugging
  }

  //define what text and component to show using tenerrary operator
  return (
    <main>
      <h1>Nathan Nav Moondi - Canada Helps Interview</h1>
      <button className="switch-page" type="button" onClick={onStateChange}>
        {page === PAGE_STATE.LIST ? "Add Name" : "< back to list"}
      </button>
      {page === PAGE_STATE.LIST ? <List names={names} /> : <Form onSubmit={onSubmit} />} 
      {/* Passed in the onsubmit handler.  Not big fan of callbacks but easier than context api or react/redux */}
    </main>
  );
}
