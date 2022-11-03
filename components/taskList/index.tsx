import React, { useEffect, useState } from "react";

const onCompletedChange = async (event: any, name: string) => {
  console.log(event.target.checked, name)
  if (event.target.checked) console.log("Checkbox is checked");
  if (!event.target.checked) console.log("Checkbox is NOT checked");

  const options = {
    method: "PUT",
    body: JSON.stringify({
      name: name,
      isDone: event.target.checked
    })
  };
  await fetch("/api/todo", options).then(res => {
    console.log(res);
  });
};

export const TaskList = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setLoading] = useState(false);
  const options = {
    method: "GET",
  };

  useEffect(() => {
    setLoading(true);
    fetch("/api/todo", options)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No tasks</p>;

  return (
    <div>
      {data.map((task) => {
        return (
          <div key={task.name}>
            <h2>Name: {task.name}</h2>
            <h2>
              Completed:
              <input
                type="checkbox"
                value={task.isDone}
                checked={task.isDone}
                onChange={event => onCompletedChange(event, task.name)}
                id="isDone"
                name="isDone"
              />
            </h2>
          </div>
        );
      })}
    </div>
  );
};
