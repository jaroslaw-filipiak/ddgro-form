// https://redux-toolkit.js.org/tutorials/quick-start

import { configureStore } from '@reduxjs/toolkit'
import formReducer from './slices/formSlice'

export const store = configureStore({
    reducer: {
        form: formReducer,
    },
})
