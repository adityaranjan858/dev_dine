import { configureStore } from "@reduxjs/toolkit";
import restaurantsReducer from "../slices/restaurantsSlice";

const store = configureStore({
    reducer: {
        restaurant: restaurantsReducer,
    },
});

export default store;