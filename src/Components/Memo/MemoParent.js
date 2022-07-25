import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import ListMapper from "../Shared/ListViewer";

const TaskList = () => {
  const [tasks, setTasks] = useState([
    "Add a seach field in the Task Component",
    "React.Memo vs useMemo",
    "Controlled vs Uncontrolled Components",
  ]);

  let newTask = "";

  return (
    <div>
      <ListMapper title="Tasks List" list={tasks} />
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Add a New Task: </Form.Label>
          <Form.Control
            value={newTask}
            onChange={() => setTasks((newTask) => [...tasks, newTask])}
            as="textarea"
            rows={1}
          />
        </Form.Group>
        <Button
          variant="info"
          type="submit"
          onClick={() => setTasks((newTask) => [...tasks, newTask])}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default TaskList;
