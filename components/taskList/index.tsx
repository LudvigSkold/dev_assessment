import React, { useCallback, useEffect, useState } from "react";
import { useTodos } from "../../hooks/todos/useTodos";
import { TaskCard } from "../task-card";

export const TaskList = () => {
  //const [tasks, setData] = useState<any[]>([]);
  //const [isLoading, setLoading] = useState(false);
  // const options = {
  //   method: "GET",
  // };
  // useEffect(() => {
  //   setLoading(true);
  //   fetch("/api/todo", options)
  //     .then((res) => res.json())
  //     .then((tasks) => {
  //       setData(tasks);
  //       setLoading(false);
  //     });
  // }, []);

  const { get, tasks, loading } = useTodos();

  useEffect(() => {
    console.log(tasks)
  }, [tasks])

  if (loading) return <p>Loading...</p>;
  if (tasks.length == 0) {
    return <p>No tasks!</p>;
  }


  return (
    <div>
      {tasks?.map((task) => (
        <div key={task.name}>
          <TaskCard
            name={task.name}
            isDone={task.isDone}
            update={() => {
              void get();
            }}
          ></TaskCard>
        </div>
      ))}
    </div>
  );
};
