import mongoose from "mongoose";
import { textChangeRangeIsUnchanged } from "typescript";
declare const global: any;

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

export const dbConnect = async () => {
    if(!cached.conn){
        cached.promise = await mongoose.connect("mongodb://localhost:27017/todosdb");
        cached.conn = await cached.promise;
    }

    return cached.conn;
}