import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { ITodoList } from "../../models/todo";

const todoSlice = createSlice({
  name: "TodoSlice",
  initialState: {
    todoList: [],
  },
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getTodo: (state: any, action: PayloadAction<ITodoList[]>): void => {
      state.todoList.push(action.payload);
      return state;
    },
  },
});

//get Selector
export const { getTodo } = todoSlice.actions;
//get Reducer
const { reducer } = todoSlice;
export default reducer;

//component call api lay [] => getTodo
