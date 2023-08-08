import React, { useState } from "react";
import { IPropsTodoForm } from "../../types/type";

const TodoForm: React.FC<IPropsTodoForm> = (props: IPropsTodoForm) => {
  const [name, setName] = useState<string>("");
  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleAddTodoList = () => {
    props.handleAddTodo({
      id: Date.now(),
      title: name,
      completed: false,
    });
    setName("");
  };

  return (
    <div className="add-todo-form">
      <input
        value={name}
        onChange={handleChangeInput}
        type="text"
        placeholder="Add a new todo..."
      />
      <button onClick={handleAddTodoList}>Add</button>
    </div>
  );
};

export default TodoForm;
