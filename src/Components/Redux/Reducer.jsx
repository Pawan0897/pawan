import { createSlice } from "@reduxjs/toolkit";
import duck from "../Images/duck2.png";
export const Mode = createSlice({
  name: "mode",
  initialState: {
    dark: "",
    light: "",
    setimg: duck,
    click: false,
  },
  reducers: {
    /** name kush vi rekh skde reducer da  */
    /************************ */
    darkmode: (state, action) => {
      state.dark = action.payload;
    },
    lightmode: (state, action) => {
      state.light = action.payload;
    },
    setduck: (state, action) => {
      state.setimg = action.payload;
    },
    click: (state, action) => {
      state.click = action.payload;
    },
  },
});
/**********  darkmode light mode nu export krna through store */
export const { darkmode, lightmode, setduck, click } = Mode.actions;
export default Mode.reducer;
