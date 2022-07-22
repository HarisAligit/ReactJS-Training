import { useState } from "react";
import ListViewer from "../Shared/ListViewer";

const TaskList = () => {
  const [tasks, SetTasks] = useState([
    "Add a seach field in the Task Component",
    "React.Memo vs useMemo",
    "Controlled vs Uncontrolled Components",
  ]);

  return (
    <div>
      <ListViewer title="Tasks List" list={tasks} />
    </div>
  );
};

export default TaskList;
