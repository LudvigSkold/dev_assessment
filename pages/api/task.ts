// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";

const connectionString = "mongodb://localhost:27017";

interface ITask {
  id: number;
  name?: string;
  completed: boolean;
}

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  let taskList: ITask[] = [
    {
      id: 1,
      name: "yo",
      completed: false,
    },
    {
      id: 2,
      name: "hejsan",
      completed: true,
    },
  ];
  if (req.method == "GET") {
    res.send(taskList);
  }
  if (req.method == "POST") {
    

  }
  if (req.method == "PUT") {
  }
  if (req.method == "DELETE") {
  }
}
