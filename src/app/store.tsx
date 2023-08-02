import { configureStore } from "@reduxjs/toolkit";
import { CompaniesSlice } from "../features/companies/ComapaniesSlice";
import { ReviewsSlice } from "../features/reviews/ReviewsSlice";
import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { UsersSlice } from "../features/users/UsersSlice";

export const store = configureStore({
  reducer: {
    companies: CompaniesSlice.reducer,
    users: UsersSlice.reducer,
    reviews: ReviewsSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
type DispatchFunc = () => AppDispatch;
export const useAppDispatch: DispatchFunc = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
