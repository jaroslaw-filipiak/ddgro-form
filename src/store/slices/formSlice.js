import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: null, // slab or wood
  total_area: 0,
  count: 0,
  medium_size: 0,
  sqrt: 0,
  value: 0,
  support_type: null, // 1 , 2 , 3 , 4
  name_surname: '',
  email: '',
  proffestion: '',
  terms_accepted: false,
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
    },
    changeEmail: (state, action) => {
      state.email = action.payload;
    },
    changeTotalArea: (state, action) => {
      state.total_area = action.payload;
      state.medium_size = Math.round(action.payload / state.count);
      state.sqrt = Math.round(Math.sqrt(state.medium_size));
    },
    changeCount: (state, action) => {
      state.count = action.payload;
      state.medium_size = Math.round(state.total_area / action.payload);
      state.sqrt = Math.round(Math.sqrt(state.medium_size));
    },
    changeNameSurname: (state, action) => {
      state.name_surname = action.payload;
    },
    changeSupportType: (state, action) => {
      state.support_type = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  changeEmail,
  changeNameSurname,
  changeType,
  changeSupportType,
  changeTotalArea,
  changeCount,
} = formSlice.actions;

export default formSlice.reducer;
