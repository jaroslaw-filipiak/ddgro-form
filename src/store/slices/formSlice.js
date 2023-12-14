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
  slab_height: null,
  slab_thickness: null,
  medium_size: null,
  sqrt: null,
  tiles_per_row: null,
  sum_of_tiles: null,
  value: null,
  support_type: null, // 1 , 2 , 3 , 4
  main_system: null, // spiral, standard, max, alu, additional_accesoriesraptor
  additional_accessories: [],
  name_surname: '',
  email: '',
  proffestion: '',
  terms_accepted: false,
  accesories: [],
  products: [],
  productsWithExtraValues: [],
  slabs_count: 0,
  supports_count: 0,
  // ============================
  LA: null,
  LA_INT: null,
  WB: null,
  LA_INT_H: null,
  NO_PAYERS_PER_ROW: null,
  NO_PAYERS_PER_COLUMN: null,
  TOTAL_NO_PAYERS: null,
  TOTAL_NO_PEDESTALS: null,
  NO_PEDESTALS_AT_TOP_AND_BOTTOM_EDGES: null,
  NO_PEDESTALS_BETWEEN_ROWS: null,
  NO_INTERMEDIATE_ROWS_OD_PEDESTALS: null,
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
      state.medium_size = Math.floor(action.payload / state.count);
      state.sqrt = Math.floor(Math.sqrt(state.medium_size));
    },
    changeCount: (state, action) => {
      state.count = action.payload;
      state.medium_size = Math.floor(state.total_area / action.payload);
      state.sqrt = Math.floor(Math.sqrt(state.medium_size));
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
      state.slab_height = action.payload;
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
      state.productsWithExtraValues = action.payload;
    },
    addExtraCountToProduct: (state, action) => {
      const product = state.productsWithExtraValues.find(
        (item) => item.id === action.payload.id
      );

      product.extra = action.payload.count;
      // console.log(product);
      console.log(action.payload);
    },
    calculateLA: (state) => {
      /*
       * Uklad płyt regularny
       * L = L/a
       * LA_INT = integer L/a
       * WB = W/b
       * LA_INT_H = integer L/a (YZ42 / row 42 on szacus)
       * */

      const L = Math.sqrt(state.total_area / state.count) * 1000;

      const r = (L * 12 + L) / (state.slab_width * 12 + state.slab_width);
      const r2 = (L * 12 + L) / (state.slab_height * 12 + state.slab_height);
      console.log(r2);
      console.log(L);
      console.log(state.slab_height);

      state.LA = r;
      state.LA_INT = Math.floor(r);
      state.WB = r2;
      state.LA_INT_H = Math.floor(r2);

      // NO_PAYERS_PER_ROW
      if (state.LA === state.LA_INT) {
        const res = state.LA_INT;
        state.NO_PAYERS_PER_ROW = res;
      } else {
        const res = state.LA_INT + 1;
        state.NO_PAYERS_PER_ROW = res;
      }

      // NO_PAYERS_PER_COLUMN
      if (state.WB === state.LA_INT_H) {
        const res = state.LA_INT_H;
        state.NO_PAYERS_PER_COLUMN = res;
      } else {
        const res = state.LA_INT_H + 1;
        state.NO_PAYERS_PER_COLUMN = res;
      }

      // TOTAL_NO_PAYERS
      const tnp = state.NO_PAYERS_PER_ROW * state.NO_PAYERS_PER_COLUMN;
      state.TOTAL_NO_PAYERS = tnp;
    },
    calculateHowManyTitlesCanFillTheSquare: (state, action) => {
      const tilesPerRow = Math.floor((state.sqrt * 1000) / state.slab_width);
      const tilesPerRow2 = Math.floor((state.sqrt * 1000) / state.slab_width);
      const tilesPerRow3 = Math.floor((state.sqrt * 1000) / state.slab_width);
      const sumOfTiles = tilesPerRow * tilesPerRow;

      state.slabs_count = sumOfTiles;
      state.tiles_per_row = tilesPerRow;
      console.log(tilesPerRow);
      console.log(tilesPerRow2);
      console.log(tilesPerRow3);
    },
    calculateSupportsCount: (state, action) => {
      if (state.support_type === 'type1' || state.support_type === 'type2') {
        console.log(state.support_type);
        console.log(state.tiles_per_row);
        const totalSupports =
          (state.NO_PAYERS_PER_ROW + 1) * (state.NO_PAYERS_PER_ROW + 1);
        state.supports_count = totalSupports;
      } else {
        console.log(state.support_type);
      }
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
  addExtraCountToProduct,
  calculateHowManyTitlesCanFillTheSquare,
  calculateSupportsCount,
  calculateLA,
} = formSlice.actions;

export default formSlice.reducer;
