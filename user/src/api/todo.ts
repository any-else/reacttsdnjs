import { ITodoList } from "../models/todo";
import axiosClient from "./axiosClient";

// Promise là một kiểu type mà typescript cung cấp cho em => kiểu bất đồng bộ

export class TodoAPI {
  static getAllTodo(): Promise<Array<ITodoList>> {
    const url: string = "todos";
    return axiosClient.get(url);
  }
  static getTodoById(id: number): Promise<ITodoList> {
    const url: string = `todo/${id}`;
    return axiosClient.get(url);
  }
}
