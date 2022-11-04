import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "../../../lib/connect";
import { Todo } from "../../../schemas/todo";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  if (req.method == "POST") {
    await new Todo({
      name: JSON.parse(req.body).name,
    }).save();
    res.status(200).send("Task added");
  }

  if (req.method == "GET") {
    const todos = await Todo.find();
    res.status(200).json(todos as any);
  }

  if (req.method == "DELETE") {
    const reqBody = JSON.parse(req.body);
    await Todo.findOneAndDelete({ name: reqBody.name });
    res.status(200).send("Task deleted");
  }

  if (req.method == "PUT") {
    const reqBody = JSON.parse(req.body);
    await Todo.findOneAndUpdate(
      { name: reqBody.name },
      { isDone: reqBody.isDone }
    );
    res.status(200).send("Task updated");
  }
}
