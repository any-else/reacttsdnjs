import React from "react";
import "./Todo.css";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoItem from "../../components/TodoItem/TodoItem";
import { ITodoList, TodoAPI } from "../../models/todo";

import { useDispatch } from "react-redux";
import { getAllTodo } from "../../redux/slices/todoSlice";
import { RootState } from "../../redux/store/store";
import { useSelector } from "react-redux";

const Todo: React.FC = () => {
  //CALL API
  //1 luu tai component nay
  const [todoApi, setTodoApi] = React.useState<Array<ITodoList>>([]);
  const [isCall, setIsCall] = React.useState<boolean>(true);
  //2 lưu lên trên thằng redux
  const dispatch = useDispatch();

  React.useEffect(() => {
    //ham de call
    const handleCallTodo = async () => {
      const data: ITodoList[] = await TodoAPI.getAllTodo();
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      await dispatch(getAllTodo() as any).unwrap();
      setTodoApi(data);
    };

    if (isCall) {
      handleCallTodo();
    }
    return () => {
      setIsCall(false);
    };
  }, [isCall]);

  const todoSelector = useSelector((state: RootState) => state.todoReducer);
  console.log("todo Selector", todoSelector);
  const handleAddTodo = (data: ITodoList): void => {
    setTodoApi([...todoApi, data]);
  };
  const handleDeleteParent = (id: number) => {
    setTodoApi(todoApi.filter((item) => item.id !== id));
  };
  const handleUpdate = (id: number) => {
    const newData = todoApi.map((item) => {
      if (item.id == id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setTodoApi([...newData]);
  };
  const handleUpdateDataName = (id: number, name: string) => {
    const newData = todoApi.map((item) => {
      if (item.id == id) {
        return { ...item, name };
      } else {
        return item;
      }
    });
    setTodoApi([...newData]);
  };

  return (
    <div className="todo-app">
      <h2>Todo List</h2>
      <main className="app-main">
        <div className="todo-list">
          <TodoForm handleAddTodo={handleAddTodo} />
          <TodoItem
            handleUpdateDataName={handleUpdateDataName}
            dataTodo={todoApi}
            handleUpdate={handleUpdate}
            handleDeleteParent={handleDeleteParent}
          />
        </div>
      </main>
    </div>
  );
};

export default Todo;
