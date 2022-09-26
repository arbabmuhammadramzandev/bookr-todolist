import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import customAxios from '../../utils/axios';
import { TActionSlice, TUpdateTextShowed, IModel } from '../../utils/type';

const initialState: IModel[] = [];
// export const getTodoLists = createAsyncThunk("todolist/getTodoLists", async(arg, {rejectWithValue}) => {
//   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MzMwMjFlZmQxMmM4MzMzYzhhNjVlYzQiLCJpYXQiOjE2NjQxODA2OTUsImV4cCI6MTY2NDI2NzA5NX0.p0KOpPQBOM-uoU_r_nmawHY9wI6iwtgsUOmyoNilWUo"
//  const user = "633021efd12c8333c8a65ec4"
//   try {
//     const { data } = await customAxios.get('/todolist', {
//       headers: {
//         Authorization: `Bearer ${token}`
//       }
//     });
//     return data;
//   } catch (err: unknown) {
//     return rejectWithValue("Some Error");
//   }
// })
export const CreateCustomSlice = (name: string) => {
  const {
    actions: { add, remove, completeStatus, reorder, update, updateTextShowed },
    reducer,
  } = createSlice({
    name,
    initialState,
    reducers: {
      add: {
        reducer: (state, action: PayloadAction<IModel>) => {
          state.push(action.payload);
          //  customAxios.post('/todolist', {
          //   text: action.payload.text,
          //   user: user,
          //   isFinished: action.payload.isFinished,
          //   createdAt: action.payload.createdAt,
          //   updatedAt: action.payload.updatedAt,
          //   isTextShowed: action.payload.isTextShowed,

          // }, {
          //   headers: {
          //     Authorization: `Bearer ${token}`
          //   }
          // });
        },
        prepare: (text: string) => ({
          payload: {
            id: new Date().getTime().toString(),
            text,
            isFinished: false,
            createdAt: new Date().toLocaleString(),
            isTextShowed: false,
          } as IModel,
        }),
      },
      update(state, action) {
        state.splice(
          action.payload.destination.index,
          0,
          action.payload.filterState
        );

      },
      remove(state, action: PayloadAction<string>) {
        const index = state.findIndex(({ id }) => id === action.payload);
        state.splice(index, 1);

      },
      completeStatus(state, action: PayloadAction<TActionSlice>) {
        const index = state.findIndex(({ id }) => id === action.payload.id);
        state[index].isFinished = action.payload.isFinished;
        state[index].updatedAt = action.payload.updatedAt;
        console.log("state90", action.payload)

      },
      updateTextShowed(state, action: PayloadAction<TUpdateTextShowed>) {
        const index = state.findIndex(({ id }) => id === action.payload.id);
        state[index].isTextShowed = action.payload.isTextShowed;


      },
      reorder(state, action) {
        const [removed] = state.splice(action.payload.source.index, 1);
        state.splice(action.payload.destination.index, 0, removed);
      },
    },
    // extraReducers:{
    //   [getTodoLists.pending.type]: (state, {payload}) => {
    //     console.log("pending", payload, state)
    //   },
    //   [getTodoLists.fulfilled.type]: (state, {payload}) => {
    //     console.log("fullfilled", payload, state)
    //   },
    //   [getTodoLists.rejected.type]: (state, {payload}) => {
    //     console.log("rejected", payload, state)
    //   }
    // }
});

  return {
    actions: { add, remove, completeStatus, reorder, update, updateTextShowed },
    reducer,
  };
};
