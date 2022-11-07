import { useEffect, useState } from "react";
import { CustomOptions, useFetch } from "use-http";
import { ITodo } from "../../schemas/todo";

export const useTodos = () => {
  const { get, post, data, error, loading } = useFetch<ITodo[]>(`/api/todo`);

  useEffect(() => {
    //void get();
    const timeoutId = setTimeout(() => void get(), 200);
    return () => clearTimeout(timeoutId);
  }, []);

  const tasks = data || [];

  return { get, post, data, tasks, error, loading };
};