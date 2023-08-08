import React, { useState } from "react";
import { IPropsTodo } from "../../types/type";
import "./index.css";
const TodoItem: React.FC<IPropsTodo> = (props: IPropsTodo) => {
  const { dataTodo } = props;
  // const dataTodo = props.dataTodo;
  const [id, setId] = useState<number>(-1);
  const handleDelete = (id: number) => {
    props.handleDeleteParent(id);
  };
  const handleUpdateStatus = (id: number) => {
    props.handleUpdate(id);
  };
  const handleEditData = (id: number) => {
    setId(id);
  };

  const updateDataName = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    props.handleUpdateDataName(id, e.target.value);
  };
  console.log(id);
  return (
    <>
      {dataTodo.length > 0 &&
        dataTodo.map((item) => {
          return (
            <div key={item.id} className="todo-item">
              <input
                onClick={() => handleUpdateStatus(item.id)}
                type="checkbox"
                checked={item.completed}
              />
              <input
                onChange={(e) => updateDataName(item.id, e)}
                readOnly={item.id == id ? false : true}
                className={item.completed ? "complete" : ""}
                type="text"
                value={item.title}
              />
              <div className="actions">
                <button onClick={() => handleEditData(item.id)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      {dataTodo.length == 0 && <p>No data</p>}
    </>
  );
};

export default TodoItem;
