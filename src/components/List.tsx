import { Name } from "./Form";

//define what is to be passesd in
interface ListProps {
    names : Name[]
}
  
//simple iterate over names, display.  Nothing amazing

  export const List = ({names} : ListProps) => { //destructure here to avoid using props keyword below
    return (
      <ul className="list-items">
        {names.map((name) => (
          <li key = {name.firstName + name.lastName}>
            {name.firstName}&nbsp;{name.lastName}
          </li>
        ))}
      </ul>
    );
  };
  