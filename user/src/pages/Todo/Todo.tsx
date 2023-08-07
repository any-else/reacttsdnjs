import React from "react";
import "./Todo.css";
import TodoForm from "../../components/TodoForm/TodoForm";
import { ITodoList } from "../../types/type";
import TodoItem from "../../components/TodoItem/TodoItem";

const Todo: React.FC = () => {
  const todoList: ITodoList[] = [
    {
      id: 1,
      name: "Uong Tra Sua cua Thay Dong",
      completed: false,
    },
    {
      id: 2,
      name: "uong nuoc mia cua Hieu",
      completed: false,
    },
    {
      id: 3,
      name: "2 macbook kia dep qua ma chua dai lop cai gi",
      completed: true,
    },
  ];
  const [todo, setTodo] = React.useState<Array<ITodoList>>(todoList);
  console.log(setTodo);
  const handleAddTodo = (data: ITodoList): void => {
    setTodo([...todo, data]);
  };
  const handleDeleteParent = (id: number) => {
    setTodo(todo.filter((item) => item.id !== id));
  };
  const handleUpdate = (id: number) => {
    const newData = todo.map((item) => {
      if (item.id == id) {
        return { ...item, completed: !item.completed };
      } else {
        return item;
      }
    });
    setTodo([...newData]);
  };
  const handleUpdateDataName = (id: number, name: string) => {
    const newData = todo.map((item) => {
      if (item.id == id) {
        return { ...item, name };
      } else {
        return item;
      }
    });
    setTodo([...newData]);
  };
  console.log(1111, todo);
  return (
    <div className="todo-app">
      <h2>Todo List</h2>
      <main className="app-main">
        <div className="todo-list">
          <TodoForm handleAddTodo={handleAddTodo} />
          <TodoItem
            handleUpdateDataName={handleUpdateDataName}
            dataTodo={todo}
            handleUpdate={handleUpdate}
            handleDeleteParent={handleDeleteParent}
          />
        </div>
      </main>
    </div>
  );
};

export default Todo;
