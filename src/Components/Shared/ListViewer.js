import React from "react";

const ListMapper = (props) => {
  return (
    <div>
      <h2>{props.title}</h2>
      <h5>
        {props.list.map((element, key) => {
          return <p key={key}>{element}</p>;
        })}
      </h5>
    </div>
  );
};

export default React.memo(ListMapper);
