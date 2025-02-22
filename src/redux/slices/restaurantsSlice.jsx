import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
// import { RES_LIST_API } from "../../components/utils/constants";

export const fetchRestaurants = createAsyncThunk("restaurants/fetch", async (query = "") => {
    try {
        const response = await axios.get("/api/");
        const restaurantData = response.data?.data?.cards?.[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        
        return query.length > 0 ? restaurantData.filter(res => res?.info?.name?.toLowerCase().includes(query.toLowerCase())) : restaurantData;
    } catch (error) {
        console.error('Error fetching data:', error);
        return error.message;
    } 
})

const restaurantsSlice = createSlice({
    name: "restaurants",
    initialState: {
        restaurants: [],
        loading: false,
        error: null,
    },
    reducers: {    },
    extraReducers: (builder)=> {
        builder.addCase(fetchRestaurants.pending, (state) => {
            state.loading = true;
            state.error = null; 
        })
        builder.addCase(fetchRestaurants.fulfilled, (state, action) => {
            state.loading = false;
            state.restaurants = action.payload;
            state.error = null; 
        })
        builder.addCase(fetchRestaurants.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload || "An error occurred";
        })
    }

})
export default restaurantsSlice.reducer;