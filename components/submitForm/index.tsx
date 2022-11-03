import React from "react";

const addTask = (name: string) => {};

export const Form = () => {
  return (
    <div className="mt-3 card p-3">
      <form className="row">
        <div className="col-10">
          <input className="form-control" placeholder="Task name" />
        </div>
        <div className="col-2">
          <button className="btn btn-success" type="submit">
            Add task
          </button>
        </div>
      </form>
    </div>
  );
};
