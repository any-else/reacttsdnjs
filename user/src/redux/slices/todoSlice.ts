import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ITodoList, TodoAPI } from "../../models/todo";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getAllTodo = createAsyncThunk<ITodoList[]>(
  "todo/getAllTodo",
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  async () => {
    const data = await TodoAPI.getAllTodo();
    console.log("data todo", data);
    return data;
  }
);

const todoSlice = createSlice({
  name: "TodoSlice",
  initialState: [],
  reducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getTodo: (state: any, action: PayloadAction<ITodoList[]>): void => {
      state.push(action.payload);
      return state;
    },
  },
  extraReducers: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [getAllTodo.fulfilled as any]: (
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      state: any[],
      action: PayloadAction<ITodoList[]>
    ) => {
      console.log("aaaa", action.payload);
      state.push(action.payload);
    },
  },
});

//get Selector
export const { getTodo } = todoSlice.actions;
//get Reducer
const { reducer } = todoSlice;
export default reducer;

//component call api lay [] => getTodo
