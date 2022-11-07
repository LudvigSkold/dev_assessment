import React, { FC, useState } from "react";
import { updateLanguageServiceSourceFile } from "typescript";
import { ITodo } from "../../schemas/todo";

const onCompletedChange = async (event: any, name: string) => {
  if (event.target.checked) console.log("Checkbox is checked");
  if (!event.target.checked) console.log("Checkbox is NOT checked");

  const options = {
    method: "PUT",
    body: JSON.stringify({
      name: name,
      isDone: event.target.checked,
    }),
  };
  await fetch("/api/todo", options).then((res) => {
    console.log(res);
  });
};

const deleteTask = async (taskName: any) => {
  console.log(taskName);
  const options = {
    method: "DELETE",
    body: JSON.stringify({
      name: taskName,
    }),
  };
  await fetch("/api/todo", options).then((res) => {
    console.log(res);
  });
};

export const TaskCard: FC<ITodo> = ({ name, isDone, update }: ITodo) => {
  return (
    <div className="card mt-3 p-3">
      <div className="row">
        <h2 className="col-1">
          <input
            type="checkbox"
            checked={isDone}
            onChange={(event) => onCompletedChange(event, name)}
            id="isDone"
            name="isDone"
            className='form-check-input'
          />
        </h2>
        <h3 className="col-9">{name}</h3>
        <button
          className="btn btn-danger col-2"
          onClick={(name) => deleteTask(name)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};