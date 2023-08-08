import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store/store";
const Login: React.FC = () => {
  const todoSelector = useSelector(
    (state: RootState) => state.todoReducer.todoList
  );
  console.log("todo Selector", todoSelector);
  return <div>Login</div>;
};

export default Login;
