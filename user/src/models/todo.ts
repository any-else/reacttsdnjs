import axiosClient from "../api/axiosClient";

//dựa trên api server trả về
export interface ITodoList {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}

// tương tác với server
export class TodoAPI {
  static getAllTodo(): Promise<Array<ITodoList>> {
    const url: string = "todos";
    return axiosClient.get(url);
  }
  static getTodoById(id: number): Promise<ITodoList> {
    const url: string = `todos/${id}`;
    return axiosClient.get(url);
  }
}
