import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: null, // slab or wood
  total_area: 0,
  count: 0,
  gap_between_slabs: 0,
  lowest: 0,
  highest: 0,
  terrace_thickness: 0,
  distance_between_joists: 0,
  distance_between_supports_under_the_joist: 0,
  joist_height: 0,
  slab_width: 0,
  slab_length: 0,
  slab_thickness: 0,
  medium_size: 0,
  sqrt: 0,
  tiles_per_row: null,
  sum_of_tiles: null,
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
    changeGapBetweenSlabs: (state, action) => {
      state.gap_between_slabs = action.payload;
    },
    chageLowest: (state, action) => {
      state.lowest = action.payload;
    },
    changeHighest: (state, action) => {
      state.highest = action.payload;
    },
    changeDistanceBetweenJoists: (state, action) => {
      state.distance_between_joists = action.payload;
    },
    changeDistanceBetweenSupportsUnderTheJoist: (state, action) => {
      state.distance_between_supports_under_the_joist = action.payload;
    },
    changeJoistHeight: (state, action) => {
      state.joist_height = action.payload;
    },
    changeSlabWidth: (state, action) => {
      state.slab_width = action.payload;
    },
    changeSlabLength: (state, action) => {
      state.slab_length = action.payload;
    },
    changeSlabThickness: (state, action) => {
      state.slab_thickness = action.payload;
    },
    changeTerraceThickness: (state, action) => {
      state.terrace_thickness = action.payload;
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
  chageLowest,
  changeHighest,
  changeGapBetweenSlabs,
  changeTerraceThickness,
  changeDistanceBetweenJoists,
  changeDistanceBetweenSupportsUnderTheJoist,
  changeJoistHeight,
  changeSlabWidth,
  changeSlabLength,
  changeSlabThickness,
} = formSlice.actions;

export default formSlice.reducer;
