import { useState } from "react";

//export from here, just easier for everyone to use
export interface Name{
  firstName: string;
  lastName: string
}

//define what is expected from caller
interface FormProps {
  onSubmit: (name: Name) => void  //I messed up this syntax!  my bad
}

export const Form = ( {onSubmit}: FormProps) => { //destructure

  const [name, setName] = useState<Name>({ //the state object which is of typeName
    firstName: "",
    lastName: "", 
  })

  //below:
  //call submit handler
  //change state of Name in text controls
    return (
      <form onSubmit={(e) => { e.preventDefault(); onSubmit(name)} } className="name-form"> 
        <label htmlFor="first-name">First name</label>
        <input type="text" onChange={(e) => setName({...name, firstName: e.target.value})} id="first-name" />
        <label htmlFor="last-name">Last name</label>
        <input type="text" onChange={(e) => setName({...name, lastName: e.target.value})} id="last-name" />
        <button>submit</button>
      </form>
    );
   //todo: use bootstrap or tailwind so doewsn't look ugly
  };
  