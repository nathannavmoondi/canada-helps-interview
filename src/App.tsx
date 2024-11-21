import React from "react";
import "./App.css";
import { Form, Name } from "./components/Form";
import { List } from "./components/List";

enum PAGE_STATE {
  FORM,
  LIST,
}


export default function App() {
  const [page, setPage] = React.useState(PAGE_STATE.LIST);
  const [names, setNames] = React.useState<Name[]>([]);

  const onStateChange = () => {
    setPage(page === PAGE_STATE.LIST ? PAGE_STATE.FORM : PAGE_STATE.LIST);
  };

  const onSubmit = (name: Name) => {
    setNames([...names, name]);
    console.log('submitted from form', name);
  }

  return (
    <main>
      <button className="switch-page" type="button" onClick={onStateChange}>
        {page === PAGE_STATE.LIST ? "add Name" : "< back to list"}
      </button>
      {page === PAGE_STATE.LIST ? <List names={names} /> : <Form onSubmit={onSubmit} />}
    </main>
  );
}
