import { configureStore } from "@reduxjs/toolkit";
import { homeReducer } from "../pages/Home/slice";

export const store = configureStore({ reducer: { nav: homeReducer } });

export type RootStore = ReturnType<typeof store.getState>;
