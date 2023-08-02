import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IUser } from "../interfaces";
import { addUser, deleteUser, fetchUsers } from "./fetchUsers";

interface InitState {
  error: any;
  status: string;
  data: IUser[];
}

const initialState: InitState = {
  error: null,
  status: "idle",
  data: [],
};

export const UsersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;

      })
      .addCase(fetchUsers.pending, (state, action) => {
        state.status = "pending";

      })
      .addCase(addUser.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];

      })
      .addCase(addUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addUser.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (element) => element.userId !== action.payload.userId
        );
      })
      .addCase(deleteUser.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteUser.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export const getUsersStatus = (state: RootState) => state.users.status;
export const getUsersData = (state: RootState) => state.users.data;
export const getUsersError = (state: RootState) => state.users.error;
