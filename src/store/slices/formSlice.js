import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: 'slab', // slab or wood
  total_area: 0,
  count: 0,
  value: 0,
  support_type: 1, // 1 , 2 , 3 , 4
  name_surname: 'Jan Nowak',
  email: 'johnDoe@example.com',
  proffestion: 'Montażysta',
  terms_accepted: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, changeEmail } =
  formSlice.actions;

export default formSlice.reducer;
