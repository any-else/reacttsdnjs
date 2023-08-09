import { Route, Routes } from "react-router-dom";
import Auth from "../layouts/auth/Auth";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import NotFound from "../pages/NotFound/NotFound";
import Main from "../layouts/main/Main";
import Todo from "../pages/Todo/Todo";

const Router: React.FC = () => {
  return (
    <Routes>
      {/* Authentication */}
      <Route path="/auth" element={<Auth />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      {/* User */}
      <Route path="/" element={<Main />}>
        <Route path="todo" element={<Todo />} />
      </Route>

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
