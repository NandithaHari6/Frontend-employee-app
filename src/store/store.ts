import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee/employeeReducer";
import logger from "redux-logger";

import { type TypedUseSelectorHook } from "react-redux";
// import departmentReducer from "./department/departmentReducer";
import { useSelector,useDispatch } from "react-redux";
import baseApi from "../api-services/api";
const store = configureStore({
  reducer: {
    employee: employeeReducer,
    [baseApi.reducerPath]:baseApi.reducer,
  },
   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware)
});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
