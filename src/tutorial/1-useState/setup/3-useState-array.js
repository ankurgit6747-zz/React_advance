import React from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return (
    <>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <>
            <h4 key={id} className="item">
              {name}
              <button onClick={() => removeItem(id)}>remove item</button>
            </h4>
          </>
        );
      })}
      <button type="button" className="btn" onClick={() => setPeople([])}>
        Clear Items
      </button>
    </>
  );
};

export default UseStateArray;
