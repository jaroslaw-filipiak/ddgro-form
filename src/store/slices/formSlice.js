import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: null, // slab or wood
  total_area: null,
  count: null,
  gap_between_slabs: null,
  lowest: null,
  highest: null,
  terrace_thickness: null,
  distance_between_joists: null,
  distance_between_supports_under_the_joist: null,
  joist_height: null,
  slab_width: null,
  slab_length: null,
  slab_thickness: null,
  medium_size: null,
  sqrt: null,
  tiles_per_row: null,
  sum_of_tiles: null,
  value: null,
  support_type: null, // 1 , 2 , 3 , 4
  main_system: null, // spiral, standard, max, alu, raptor
  additional_accessories: [],
  name_surname: '',
  email: '',
  proffestion: '',
  terms_accepted: false,
  accesories: [],
  products: [],
};

export const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    changeType: (state, action) => {
      state.type = action.payload;
      // reset main system when type is changed
      state.main_system = null;
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
    changeMainSystem: (state, action) => {
      state.main_system = action.payload;
    },
    setAdditionalAccessories: (state, action) => {
      state.additional_accessories = action.payload;
    },
    setAccesories: (state, action) => {
      state.accesories = action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
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
  changeMainSystem,
  setAdditionalAccessories,
  setAccesories,
  setProducts,
} = formSlice.actions;

export default formSlice.reducer;
