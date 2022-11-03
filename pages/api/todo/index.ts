import type { NextApiRequest, NextApiResponse } from "next";
import { dbConnect } from "../../../lib/connect";
import { Todo } from "../../../schemas/todo";

type Data = {
  name: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  await dbConnect();

  // await new Todo({
  //   name: "hej-"+new Date().toISOString()
  // }).save();

  const todos = await Todo.find();
  console.log(todos);
  // res.status(200).json({name: "hej"});
  res.status(200).json(todos as any);
}
