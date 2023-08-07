export interface ITodoList {
  id: number;
  name: string;
  completed: boolean;
}

export interface IPropsTodo {
  dataTodo: ITodoList[];
  handleDeleteParent: (id: number) => void;
  handleUpdate: (id: number) => void;
  handleUpdateDataName: (id: number, name: string) => void;
}

export interface IPropsTodoForm {
  handleAddTodo: (data: ITodoList) => void;
}
