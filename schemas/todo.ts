import { model, models, Schema } from "mongoose";

export interface ITodo {
    name: string;
    isDone: boolean;
}

const todoSchema = new Schema({
    name: {type: String, required: true},
    isDone: {type: Boolean, default: false}
})

export const Todo = models.todos || model("todos", todoSchema);