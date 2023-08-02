import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { ICompany } from "../interfaces";
import { addCompany, deleteCompany, fetchCompanies } from "./fetchCompanies";

interface InitState {
  error: any;
  status: string;
  data: ICompany[];
}

const initialState: InitState = {
  error: null,
  status: "idle",
  data: [],
};

export const CompaniesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchCompanies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;

      })
      .addCase(fetchCompanies.pending, (state, action) => {
        state.status = "pending";

      })
      .addCase(addCompany.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];

      })
      .addCase(addCompany.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addCompany.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(deleteCompany.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (element) => element.companyId !== action.payload.companyId
        );
      })
      .addCase(deleteCompany.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteCompany.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export const getCompaniesStatus = (state: RootState) => state.companies.status;
export const getCompaniesData = (state: RootState) => state.companies.data;
export const getCompaniesError = (state: RootState) => state.companies.error;
