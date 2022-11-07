import React, { useState } from "react";
import { json } from "stream/consumers";

export const Form = () => {
  const [first, setFirst] = useState("");

  const submit = async (event: any) => {

    const options = {
      method: "POST",
      body: JSON.stringify({
        name: first,
      }),
    };
    await fetch("/api/todo", options).then(res => {
      console.log(res);
    });

    console.log(options);
  };

  return (
    <div className="mt-3 card p-3">
      <form className="row" onSubmit={submit}>
        <div className="col-10">
          <input
            className="form-control"
            placeholder="Task name"
            onChange={(event) => setFirst(event.target.value)}
            value={first}
          />
        </div>
          <button className="btn btn-success col-2" type="submit">
            Add task
          </button>
      </form>
    </div>
  );
};
