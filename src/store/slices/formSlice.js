import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  type: '', // slab or wood
  total_area: '',
  count: '',
  gap_between_slabs: '',
  lowest: '',
  highest: '',
  terrace_thickness: '',
  distance_between_joists: '',
  distance_between_supports_under_the_joist: '',
  joist_height: '',
  slab_width: '',
  slab_height: '',
  slab_thickness: '',
  medium_size: '',
  sqrt: '',
  tiles_per_row: '',
  sum_of_tiles: '',
  value: '',
  support_type: '', // 1 , 2 , 3 , 4
  main_system: '', // spiral, standard, max, alu, additional_accesoriesraptor
  additional_accessories: [],
  additional_products: [],
  name_surname: '',
  email: '',
  proffestion: '',
  terms_accepted: false,
  accesories: [],
  products: [],
  productsWithExtraValues: [],
  // ============================
  /*
   * finalne wyliczenie * b5 (liczba tarasów)
   */
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
  // ============================
  sections: 0,
  count_in_each_section: 0,
  // ============================
  //  Matryce
  // ============================
  M_STANDARD: [],
  // ============================
  // form steps validation
  // ============================
  step2validation: 0,
  step3validation: 0,
  step4validation: 0,
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
    changeProffesion: (state, action) => {
      state.proffesion = action.payload;
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

    // ============================

    changeDistanceBetweenJoists: (state, action) => {
      state.distance_between_joists = action.payload;
      state.slab_height = action.payload;
    },
    changeSlabLength: (state, action) => {
      state.slab_height = action.payload;
      state.distance_between_joists = action.payload;
    },

    // ============================
    changeDistanceBetweenSupportsUnderTheJoist: (state, action) => {
      state.distance_between_supports_under_the_joist = action.payload;
      state.slab_width = action.payload;
    },
    changeSlabWidth: (state, action) => {
      state.slab_width = action.payload;
      state.distance_between_supports_under_the_joist = action.payload;
    },

    // ============================
    changeJoistHeight: (state, action) => {
      state.joist_height = action.payload;
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
    setAdditionalProducts: (state, action) => {
      console.log('setAdditionalProducts');
      state.products = action.payload;
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
      state.tiles_per_row = tilesPerRow;
    },
    calculateSupportsCount: (state, action) => {
      if (state.support_type === 'type1') {
        // x51 * b5
        // x51 = (1+x47)* (1+x48)

        const totalSupports =
          (state.NO_PAYERS_PER_ROW + 1) * (state.NO_PAYERS_PER_COLUMN + 1);
        state.supports_count = totalSupports * state.count;
      } else if (state.support_type === 'type2') {
        // X51*B5+B23
        // x51 = (1+x47)* (1+x48)

        const totalSupports =
          (state.NO_PAYERS_PER_ROW + 1) *
            (state.NO_PAYERS_PER_COLUMN + 1) *
            state.count +
          state.slabs_count;

        state.supports_count = totalSupports;
      } else if (state.support_type === 'type3') {
        console.log(state.support_type);
        /*
         *
         * Podparcie na rogach / przesunięcie
         *  WB === y41
         *  LA_INT_H === y42
         *
         */

        const y56 = state.NO_PAYERS_PER_ROW + 1;
        const y57 = state.NO_PAYERS_PER_ROW * 2;
        const y58 = state.NO_PAYERS_PER_COLUMN - 1;

        // prettier-ignore
        state.TOTAL_NO_PEDESTALS = (2 * y56) + (y58 * y57);
        state.supports_count = state.TOTAL_NO_PEDESTALS * state.count;

        // state.supports_count = c25 * b25;
      } else if (state.support_type === 'type4') {
        // =B25+B23

        // ======== B25 =========
        const y56 = state.NO_PAYERS_PER_ROW + 1;
        const y57 = state.NO_PAYERS_PER_ROW * 2;
        const y58 = state.NO_PAYERS_PER_COLUMN - 1;

        // prettier-ignore
        state.TOTAL_NO_PEDESTALS = (2 * y56) + (y58 * y57);
        state.supports_count =
          state.TOTAL_NO_PEDESTALS * state.count + state.slabs_count;
        // ======== B25 =========
      }
    },
    calculateSlabsCount: (state) => {
      state.slabs_count = state.TOTAL_NO_PAYERS * state.count;
    },
    setSections: (state, action) => {
      state.sections = action.payload;
    },
    setAverageInEachSection: (state, action) => {
      state.count_in_each_section = action.payload;
    },
    setM_STANDARD: (state, action) => {
      state.M_STANDARD = action.payload;
    },
    setStep2Validation: (state, action) => {
      state.step2validation = action.payload;
    },
    setStep3Validation: (state, action) => {
      state.step3validation = action.payload;
    },
    setStep4Validation: (state, action) => {
      state.step4validation = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  increment,
  decrement,
  incrementByAmount,
  changeEmail,
  changeProffesion,
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
  calculateSlabsCount,
  setSections,
  setAverageInEachSection,
  setM_STANDARD,
  setAdditionalProducts,
  setStep2Validation,
  setStep3Validation,
  setStep4Validation,
} = formSlice.actions;

export default formSlice.reducer;
