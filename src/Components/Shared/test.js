import React, { useEffect } from "react";
import TaskList from "../Memo/MemoParent";
import ListMapper from "./ListViewer";

const Welcome = (props) => {
  const x = "Hello From";
  const numbers = [1, 2, 3, 4, 6, 7, 8];

  useEffect(() => {
    console.log("Welcome Component Mounted!");
    return () => {
      console.log("Welcome Component Unmounted!");
    };
  }, []);

  return (
    <div>
      <ListMapper title="Numbers" list={numbers} />
      <TaskList />
      {x}
    </div>
  );
};

export default Welcome;
