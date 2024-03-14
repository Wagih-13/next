import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export let getWeather = createAsyncThunk(
  "weather/getWeather",
  async (country) => {
    let req = await axios.get(
      `https://api.weatherapi.com/v1/forecast.json?key=f623af5d7ba94d1a992112233240101&q=${country}&days=3`
    );
    return req?.data;
  }
);

export let weatherSlice = createSlice({
  name: "weather",
  initialState: {
    wetherList: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getWeather.pending, (state, action) => {});
    builder.addCase(getWeather.fulfilled, (state, action) => {
      state.wetherList = action.payload;
    });
    builder.addCase(getWeather.rejected, (state, action) => {});
  },
});

export default weatherSlice.reducer;
