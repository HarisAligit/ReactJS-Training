import React from "react";
import { ListGroup } from "react-bootstrap";

const ListMapper = (props) => {
  return (
    <div>
      <ListGroup as="ul">
        <ListGroup.Item as="li" className="list-head" active>
          <h2>{props.title}</h2>
        </ListGroup.Item>
        <ListGroup.Item as="li">
          {props.list.map((element, key) => {
            return <p key={key}>{element}</p>;
          })}
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default React.memo(ListMapper);
