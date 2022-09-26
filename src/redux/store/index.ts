import { configureStore, combineReducers } from '@reduxjs/toolkit';
import thunkMiddleware from 'redux-thunk';
import { doneSlice } from '../slice/done';
import { inProgressSlice } from '../slice/inProgress';
import { todoSlice } from '../slice/todo';
// import { getSlice } from '../slice/get';
import {CreateCustomSlice} from '../slice/customSlice' 

export const store = configureStore({
  reducer: combineReducers({
    done: doneSlice.reducer,
    inProgress: inProgressSlice.reducer,
    todo: todoSlice.reducer,
  }),
  middleware: [thunkMiddleware],
});

export type StoreDispatch = typeof store.dispatch;
export type StoreState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch


