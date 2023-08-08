import React from "react";
import "./Todo.css";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoItem from "../../components/TodoItem/TodoItem";
import { ITodoList } from "../../models/todo";
import { TodoAPI } from "../../api/todo";
import { useDispatch } from "react-redux";
import { getTodo } from "../../redux/slices/todoSlice";

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

      console.log("data", data);
      dispatch(getTodo(data));
      setTodoApi(data);
    };

    if (isCall) {
      handleCallTodo();
    }
    return () => {
      setIsCall(false);
    };
  }, [isCall]);

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
