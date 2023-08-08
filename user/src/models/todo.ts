//dựa trên api server trả về
export interface ITodoList {
  userId?: number;
  id: number;
  title: string;
  completed: boolean;
}
