import { Button } from "react-bootstrap";

const Todo = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <>
      <h2>My Todos</h2>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <Button onClick={addTodo}>Add Todo</Button>
    </>
  );
};

export default Todo;
