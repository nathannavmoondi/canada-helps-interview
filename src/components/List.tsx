import { Name } from "./Form";

interface ListProps {
    names : Name[]
  }
  
  export const List = (props: ListProps) => {
    return (
      <ul className="list-items">
        {props.names.map((name) => (
          <li key = {name.firstName + name.lastName}>
            {name.firstName}&nbsp;{name.lastName}
          </li>
        ))}
      </ul>
    );
  };
  