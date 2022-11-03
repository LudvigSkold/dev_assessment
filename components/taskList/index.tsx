import React, { useEffect, useState } from "react";

export const TaskList = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/api/task")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No tasks</p>;

  console.log(data);

  return (
    <div>
      {data.map((task) => {
        return (
          <div key={task.id}>
            <h2>Name: {task.name}</h2>
            <h2>Completed: {task.completed}</h2>
          </div>
        );
      })}
    </div>
  );
};
