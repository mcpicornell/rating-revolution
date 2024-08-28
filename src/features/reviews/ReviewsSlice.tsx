import { createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { IReview } from "../interfaces";
import { addReview, deleteReview, fetchReviews } from "./fetchReviews";

interface InitState {
  error: any;
  status: string;
  data: IReview[];
}

const initialState: InitState = {
  error: null,
  status: "idle",
  data: [],
};

export const ReviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReviews.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.data = action.payload;
      })
      .addCase(fetchReviews.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;

      })
      .addCase(fetchReviews.pending, (state, action) => {
        state.status = "pending";

      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.data = [action.payload, ...state.data];

      })
      .addCase(addReview.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(addReview.pending, (state, action) => {
        state.status = "pending";
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.data = state.data.filter(
          (element) => element.id !== action.payload.id
        );
      })
      .addCase(deleteReview.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteReview.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export const getReviewStatus = (state: RootState) => state.reviews.status;
export const getReviewData = (state: RootState) => state.reviews.data;
export const getReviewError = (state: RootState) => state.reviews.error;
