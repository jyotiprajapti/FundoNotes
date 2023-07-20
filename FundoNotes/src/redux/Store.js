import { configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import rootReducer from "./RootReducer";
import {DATE_AND_TIME,LABEL_DATA,TOGGLE_GRID_LABEL_VIEW} from './Constants'
export const store = configureStore({
    reducer : rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [DATE_AND_TIME,LABEL_DATA,TOGGLE_GRID_LABEL_VIEW],
        },
      }),
})
