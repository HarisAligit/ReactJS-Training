import { useState, useCallback } from "react";
import { Button } from "react-bootstrap";
import Todo from "./todos";

const NewTodo = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount((c) => c + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <>
      <Todo todos={todos} addTodo={addTodo} />
      <hr />
      <div>
        Count: {count}
        <Button variant="secondary" onClick={increment}>
          +
        </Button>
      </div>
    </>
  );
};

export default NewTodo;
