import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {};

export const { actions: profileActions, reducer: profileReducer } = createSlice(
  {
    name: "profile",
    initialState,
    reducers: {
      set: (
        state,
        { payload }: PayloadAction<Partial<typeof initialState>>
      ) => ({
        ...state,
        ...payload,
      }),
    },
  }
);
