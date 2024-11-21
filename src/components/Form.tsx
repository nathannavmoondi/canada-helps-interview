import { useState } from "react";

export interface Name{
  firstName: string;
  lastName: string
}


interface FormProps {
  onSubmit: (name: Name) => void
}
export const Form = ( {onSubmit}: FormProps) => {

  const [name, setName] = useState<Name>({
    firstName: "",
    lastName: "", 
  })

    return (
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(name)} } className="name-form">
        <label htmlFor="first-name">First name</label>
        <input type="text" onChange={(e) => setName({...name, firstName: e.target.value})} id="first-name" />
        <label htmlFor="last-name">Last name</label>
        <input type="text" onChange={(e) => setName({...name, lastName: e.target.value})} id="last-name" />
        <button>submit</button>
      </form>
    );
  };
  